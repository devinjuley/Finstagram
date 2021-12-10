from .db import db


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=db.func.now())
    updated_at = db.Column(db.DateTime(timezone=True), nullable=False, default=db.func.now(), onupdate=db.func.now())

    user = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='posts', cascade="all, delete-orphan")
    images = db.relationship('Image', back_populates='posts', cascade="all, delete-orphan")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'content': self.content,
            'images': [image.to_dict() for image in self.images],
            'comments': {comment.to_dict()['id']: comment.to_dict() for comment in self.comments},
            'user': self.user.to_dict_for_comments()
        }
