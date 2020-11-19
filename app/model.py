from app import db
from flask_login import current_user, login_user, logout_user
from flask_login import UserMixin, login_required

class Mentee(db.Model, UserMixin):
    __tablename__ = "Users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    profile = db.relationship('User_Profile', backref='author_of_profile', lazy=True)

class Profile(db.Model):
    __tablename__ = "Profiles"
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)

    user_id = db.Column(db.Integer, db.ForeignKey('Mentees.id'), nullable=False)
