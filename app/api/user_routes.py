from operator import not_, or_
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from sqlalchemy import or_
from app.forms import FollowForm
from app.models.user import follows

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def getAllUsers():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# users search route
@user_routes.route('/<string:search_term>', methods=['GET'])
# @login_required
def users(search_term):
    users = User.query.filter(
                or_(
                    User.first_name.ilike(f"%{search_term}%"),
                    User.last_name.ilike(f"%{search_term}%"),
                    User.username.ilike(f"%{search_term}%")
                )
            ).all()

    return {'users': [user.to_dict_for_search() for user in users]}


# user pro page posts
@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    # print('-----------------', user.to_dict_for_profile())
    return user.to_dict_for_profile()



@user_routes.route('/follows/<int:followingId>', methods=['POST'])
@login_required
def follows(followingId):
    # form = FollowForm()
    print('------------', current_user.get_id())
    # form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    user = User.query.get(current_user.get_id())
    # user = User.query.get(sessionUserId)
    new_follow = User.query.get(followingId)
    user.follow(new_follow)
    db.session.commit()
    return 'hi'
