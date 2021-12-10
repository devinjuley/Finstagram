from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


follows = db.Table(
    "follows",
    db.Column("follower_id", db.Integer,  db.ForeignKey("users.id"), nullable=False),
    db.Column("followed_id", db.Integer, db.ForeignKey("users.id"), nullable=False)
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    profile_image_url  = db.Column(db.String(1000), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=db.func.now(), onupdate=db.func.now())

    images = db.relationship('Image', back_populates='user')
    posts = db.relationship('Post', back_populates='user')
    comments = db.relationship('Comment', back_populates='user')

    followers = db.relationship(
        "User",
        secondary=follows,
        primaryjoin=(follows.c.follower_id == id),
        secondaryjoin=(follows.c.followed_id == id),
        backref=db.backref("following", lazy="dynamic"),
        lazy="dynamic"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def follow(self, id):
        if id not in self.following:
            self.following.append(id)
            return self.to_dict

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'profile_image_url': self.profile_image_url,
            'follows': {user.to_dict_for_follows()['id']:user.to_dict_for_follows() for user in self.followers}
        }

    def to_dict_for_comments(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_image_url': self.profile_image_url
        }

    def to_dict_for_search(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'profile_image_url': self.profile_image_url
        }

    def to_dict_for_follows(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'posts': {post.to_dict()['id']: post.to_dict() for post in self.posts}
        }

    def to_dict_for_profile(self):
        return {
            'id': self.id,
            'username': self.username,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'profile_image_url': self.profile_image_url,
            'posts': {post.to_dict()['id']: post.to_dict() for post in self.posts},
            'follows': [user.to_dict_for_follows() for user in self.followers]
        }
