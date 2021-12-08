from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Post, Comment, db
from app.forms import CreateCommentForm
from app.forms import EditCommentForm

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


# delete comment route
@comment_routes.route('/<int:commentId>/delete', methods=['DELETE'])
@login_required
def deleteComment(commentId):
    comment = Comment.query.get(commentId)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict_delete()


# edit comment route
@comment_routes.route('/<int:commentId>/edit', methods=['PUT'])
# @login_required
def editComment(commentId):
   editedCommentForm = EditCommentForm()
   editedCommentForm['csrf_token'].data = request.cookies['csrf_token']
   if editedCommentForm.validate_on_submit():
      comment = Comment.query.get(commentId)
      comment.content = editedCommentForm.data['content']
      db.session.commit()
      return comment.to_dict()
   else:
      return 'bad data'
