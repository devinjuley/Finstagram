from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, URL

class CreatePostForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    content = StringField('content')


class CreateImageForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    # image_url = StringField('image_url', validators=[DataRequired(message='Please provide a valid image URL'), URL(require_tld=True, message='Please provide a valid image URL')])
