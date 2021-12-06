from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models import Post, Image, db
from app.forms import CreatePostForm, CreateImageForm

post_routes = Blueprint('posts', __name__)

@post_routes.route('/new', methods=['POST'])
# @login_required
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
