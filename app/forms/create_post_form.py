from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class CreatePost(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    content = StringField('content')


class CreateImage(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    post_id = IntegerField('post_id', validators=[DataRequired()])
    image_url = StringField('image_url', validators=[DataRequired()])
