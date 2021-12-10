from operator import not_, or_
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db, Post
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
@login_required
def users(search_term):
    users = User.query.filter(
                or_(
                    User.first_name.ilike(f"%{search_term}%"),
                    User.last_name.ilike(f"%{search_term}%"),
                    User.username.ilike(f"%{search_term}%")
                )
            ).all()

    return {'users': [user.to_dict_for_search() for user in users]}


# current user profile page posts
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict_for_profile()


# posts for given user profile
@user_routes.route('/<int:id>/posts')
# @login_required
def userPosts(id):
    user = User.query.get(id)
    return user.to_dict_for_posts()


# # post for a given users main feed (followers posts)
# @user_routes.route('<int:id>/follows/posts')
# # @login_required
# def followersPosts(id):
#     user = User.query.get(id)
#     # # for follower in user.followers:
#     #     # print('you are in the for loop =================')
#     #     # print(follower.to_dict_for_posts(),'==================')

#     # return {'posts': {follower.to_dict_for_posts() for follower in user.followers}}
#     # # followers = User.query.filter(User.id in user.followers)
#     # # return {'posts'}

#     return {
#         'posts': {follower[follower.id]['posts']['id']: follower[follower.id]['posts']['id'].to_dict() for follower in user.to_dict()['follows'] for post in follower['posts'] }
#     }

#     return user.to_dict()['follows']


# add a follower user route
@user_routes.route('/follows/new', methods=['POST'])
@login_required
def addFollows():
    form = FollowForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        follower_id = form.data['follower_id']
        followed_id = form.data['followed_id']
        user = User.query.get(follower_id)
        new_follow = User.query.get(followed_id)
        new_follow.follow(user)
        db.session.commit()
        return user.to_dict()


# remove a follower user route
@user_routes.route('/<int:follower_id>/follows/<int:followed_id>/delete', methods=['DELETE'])
@login_required
def removeFollow(follower_id, followed_id):
    user = User.query.get(follower_id)
    unfollow_user = User.query.get(followed_id)
    unfollow_user.unfollow(user)
    db.session.commit()
    return {
        'user_id': follower_id,
        'unfollowed_id': followed_id
    }
