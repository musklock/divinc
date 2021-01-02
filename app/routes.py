from flask import Flask, render_template, flash, redirect
from app import app
from .forms import *
from .models import *
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/index')
def index1():
    return render_template('index.html')

@app.route('/profile/mentee', methods=['GET', 'POST'])
def profile_mentee():
    form = MenteeForm()
    if form.validate_on_submit():
        new_profile = MenteeProfile()
        new_profile.bio = form.bio.data
        new_profile.current_industry = form.current_industry.data
        new_profile.desired_field = form.desired_field.data
        new_profile.mentee_purpose = form.mentee_purpose.data
        new_profile.secret_question = form.secret_question.data

        db.session.add(new_profile)
        db.session.commit()
        # logged_in = checklogin()
        flash("Your profile has been made!", "success")
        return redirect(url_for('home'))
    # logged_in = checklogin()
    return render_template("mentee_profile.html", form=form)
    # return render_template("mentee_profile.html", form=form, logged_in=logged_in)


@app.route('/api', methods=['GET'])
def api():
    return {
        'userId': 1,
        'title': 'Flask React Application',
        'complete': False
}

@app.route('/profile/mentor', methods=['GET', 'POST'])
def profile_mentor():
    form = MentorForm()
    if form.validate_on_submit():
        new_profile = MentorProfile()
        new_profile.past_industry = form.past_industry.data
        new_profile.current_field = form.current_field.data
        new_profile.mentor_purpose = form.mentor_purpose.data
        new_profile.secret_question = form.secret_question.data

        db.session.add(new_profile)
        db.session.commit()
        # logged_in = checklogin()
        flash("Your profile has been made!", "success")
        return redirect(url_for('home'))
    # logged_in = checklogin()
    return render_template("mentor_profile.html", form=form)
    # return render_template("mentor_profile.html", form=form, logged_in=logged_in)
