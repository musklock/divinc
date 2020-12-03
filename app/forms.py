from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, ValidationError, TextAreaField
from wtforms.validators import DataRequired, InputRequired, Email, Length, Required, EqualTo
from flask_wtf.file import FileField, FileAllowed, FileRequired

class MenteeForm(FlaskForm):
    bio = TextAreaField('Bio', validators = [Length(max = 1024)])
    current_industry = StringField('What industry are you currently in?')
    desired_field = StringField('What is your desired field in tech')
    mentee_purpose = StringField('What do you want out of a mentorship?')
    secret_question = TextAreaField('What are the biggest career challenges you are facing right now?')

class MentorForm(FlaskForm):
    past_industry = StringField('Have you ever switched your career in the past? If yes, what was your original field?')
    current_field - StringField('What is your current field?')
    mentor_purpose = StringField('What can you offer as a mentor?')
    secret_question = TextAreaField('TBD')