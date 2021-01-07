from app import db
from flask_login import current_user, login_user, logout_user
from flask_login import UserMixin, login_required

# class Mentee(db.Model, UserMixin):
#     __tablename__ = "Mentees"
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     username = db.Column(db.String(15), unique=True, nullable = False)
#     full_name = db.Column(db.String(128), nullable = False)
#     password = db.Column(db.String(60), nullable=False)
#     # otp_secret = db.Column(db.Integer, nullable=True)
#     profile = db.relationship('MenteeProfile', backref='author_of_profile', lazy=True)

# remove UserMixin since this is a child class 
class MenteeProfile(db.Model, UserMixin):
    __tablename__ = "MenteeProfiles"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    current_industry = db.Column(db.String(500), nullable = False)
    desired_field = db.Column(db.String(500), nullable = False)
    mentee_purpose = db.Column(db.String(500), nullable = False)
    secret_question = db.Column(db.String(500), nullable = False)
    # mentee_id = db.Column(db.Integer, db.ForeignKey('Mentees.id'), nullable=False)

# class Mentor(db.Model, UserMixin):
#     __tablename__ = "Mentors"
#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     username = db.Column(db.String(15), unique=True, nullable = False)
#     full_name = db.Column(db.String(128), nullable = False)
#     password = db.Column(db.String(60), nullable=False)
#     # otp_secret = db.Column(db.Integer, nullable=True)
#     profile = db.relationship('MentorProfile', backref='author_of_profile', lazy=True)

class MentorProfile(db.Model, UserMixin):
    __tablename__ = "MentorProfiles"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    past_industry = db.Column(db.String(500), nullable = False)
    current_field = db.Column(db.String(500), nullable = False)
    mentor_purpose = db.Column(db.String(500), nullable = False)
    secret_question = db.Column(db.String(500), nullable = False)
    # mentor_id = db.Column(db.Integer, db.ForeignKey('Mentors.id'), nullable=False)