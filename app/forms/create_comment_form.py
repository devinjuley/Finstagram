from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class CreateCommentForm(FlaskForm):
   user_id = IntegerField('user_id', validators=[DataRequired()])
   post_id = IntegerField('post_id', validators=[DataRequired()])
   content = StringField('content', validators=[DataRequired()])
