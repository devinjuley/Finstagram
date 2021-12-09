from operator import not_, or_
from flask import Blueprint, jsonify
from flask_login import login_required
from werkzeug.wrappers import request
from app.models import User
from sqlalchemy import or_

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



@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# query = meta.Session.query(User).filter(
#     and_(
#         User.firstname.like(search_var1),
#         User.lastname.like(search_var2)
#     )
# )
