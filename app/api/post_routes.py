from flask import Blueprint, request
from flask_login import login_required, current_user
from app.forms.edit_post_form import EditPostForm
from app.models import Post, Image, db
from app.forms import CreatePostForm, CreateImageForm, EditPostForm
from app.s3_helpers import upload_file_to_s3, allowed_file, get_unique_filename, delete_file_from_s3

post_routes = Blueprint('posts', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# get posts route (discover posts route handler)
@post_routes.route('/discover')
def getPosts():
    posts = Post.query.all()
    # [print(post.to_dict()) for post in posts]
    # posts_dict = {}
    # for post in posts:
    #     posts_dict[post.to_dict()['id']] = post.to_dict()
    #     posts_dict[post.to_dict()['id']]['images'] = []
    #     for image in post.image:
    #         posts_dict[post.to_dict()['id']]['images'].append(image.to_dict())

    return {
        'posts': {post.to_dict()['id']: post.to_dict() for post in posts}
    }


# create new post route
@post_routes.route('/new', methods=['POST'])
@login_required
def createPost():

    if "post_image" not in request.files:
        return {"errors": ["Post image required"]}, 400

    image = request.files["post_image"]

    if not allowed_file(image.filename):
        return {"errors": ["file type not permitted"]}, 400

    image.filename = get_unique_filename(image.filename)


    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        upload = upload_file_to_s3(image)
        if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            return upload, 400
        url = upload["url"]

        new_post = Post(
            user_id=form.data['user_id'],
            content=form.data['content'],
        )
        form_image = CreateImageForm()
        form_image['csrf_token'].data = request.cookies['csrf_token']

        if form_image.validate_on_submit():
            db.session.add(new_post)
            db.session.commit()
            postId = new_post.id
            new_image = Image(
                user_id=form_image.data['user_id'],
                post_id=postId,
                image_url=url
            )
            db.session.add(new_image)
            db.session.commit()

            return Post.query.get(postId).to_dict()
        else:
            return {'errors': validation_errors_to_error_messages(form_image.errors)}, 401
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# delete post route
@post_routes.route('/<int:postId>/delete', methods=['DELETE'])
@login_required
def deletePost(postId):
    post = Post.query.get(postId)
    key = post.images[0].image_url.split('/')[-1]
    delete_file_from_s3(key)
    db.session.delete(post)
    db.session.commit()
    return post.to_dict()


# TO DO: implement current_user
# edit post route
@post_routes.route('/<int:postId>/edit', methods=['PUT'])
@login_required
def editPost(postId):
    editedPostForm = EditPostForm()
    editedPostForm['csrf_token'].data = request.cookies['csrf_token']
    if editedPostForm.validate_on_submit():
        post = Post.query.get(postId)
        post.content = editedPostForm.data['content']
        db.session.commit()
        return post.to_dict()
    else:
        return 'bad data'
