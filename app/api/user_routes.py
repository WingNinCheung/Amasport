from crypt import methods
from itertools import count
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User
from ..models import db

user_routes = Blueprint("users", __name__)


@user_routes.route("/")
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route("/<int:id>")
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<int:id>/edit", methods=["PUT"])
@login_required
def updateUser(id):
    user = User.query.get(id)

    street = request.json["street"]
    city = request.json["city"]
    state = request.json["state"]
    zip_code = request.json["zip_code"]
    country = request.json["country"]

    user.street = street
    user.city = city
    user.state = state
    user.zip_code = zip_code
    user.country = country

    db.session.commit()

    return user.to_dict()
