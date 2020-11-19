from flask import Flask, render_template, flash, redirect
from app import app


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')




