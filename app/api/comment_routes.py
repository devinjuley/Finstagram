from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Post, Comment, db
from app.forms import CreateCommentForm

comment_routes = Blueprint('comments', __name__)


# create new comment route
@comment_routes.route('/new', methods=['POST'])
@login_required
def createComment():
   form = CreateCommentForm()
   form['csrf_token'].data = request.cookies['csrf_token']
   if form.validate_on_submit():
      print('------------------- you are here')
      new_comment = Comment(
         user_id=form.data['user_id'],
         post_id=form.data['post_id'],
         content=form.data['content'],
      )
      db.session.add(new_comment)
      db.session.commit()

      return Comment.query.get(new_comment.id).to_dict()

   else:
      return 'bad data'


# delete post route
# @post_routes.route('/<int:postId>/delete', methods=['DELETE'])
# @login_required
# def deletePost(postId):
#     post = Post.query.get(postId)
#     db.session.delete(post)
#     db.session.commit()
#     return post.to_dict()
