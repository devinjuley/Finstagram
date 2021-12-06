from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Post, Image, db
from app.forms import CreatePostForm, CreateImage

post_routes = Blueprint('posts', __name__)

@post_routes.route('/new', methods=['POST'])
def createPost():
    form = CreatePostForm()
    # form_image = CreateImage()
    print(form)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # print(form_post)
        new_post = Post(
            user_id=form.data['user_id'],
            content=form.data['content'],
        )
        db.session.add(new_post)
        db.session.commit()
        print(new_post.to_dict())
        return 'ok'
    else:
        print('bad data')
        return 'bad data'
