from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class CreatePostForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    content = StringField('content')


class CreateImageForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    image_url = StringField('image_url', validators=[DataRequired()])
