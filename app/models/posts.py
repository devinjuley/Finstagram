from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Post(db.Model, UserMixin):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=db.func.now(), onupdate=db.func.now())

    user = db.relationship('User', back_populates='post')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.content,
        }