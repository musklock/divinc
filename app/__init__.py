from flask import Flask

app = Flask(__name__, template_folder='../templates', static_url_path="", static_folder="static")

from app import routes
