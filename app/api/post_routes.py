from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import Post, Image, db
from app.forms import CreatePostForm, CreateImageForm

post_routes = Blueprint('posts', __name__)


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
    form = CreatePostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_post = Post(
            user_id=form.data['user_id'],
            content=form.data['content'],
        )
        db.session.add(new_post)
        db.session.commit()
        postId = new_post.id

        form_image = CreateImageForm()
        form_image['csrf_token'].data = request.cookies['csrf_token']
        if form_image.validate_on_submit():
            new_image = Image(
                user_id=form_image.data['user_id'],
                post_id=postId,
                image_url=form_image.data['image_url']
            )
            db.session.add(new_image)
            db.session.commit()

            return Post.query.get(postId).to_dict()

    else:
        return 'bad data'
