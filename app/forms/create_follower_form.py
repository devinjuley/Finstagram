from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
# from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User

class FollowForm(FlaskForm):
    follower_id = IntegerField('follower_id', validators=[DataRequired()])
    followed_id = IntegerField('followed_id', validators=[DataRequired()])
