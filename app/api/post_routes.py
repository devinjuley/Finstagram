from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post, Image

post_routes = Blueprint('posts', __name__)

@post_routes.route('/posts/new', methods=['POST'])
@login_required
def createPost():
    form = 
