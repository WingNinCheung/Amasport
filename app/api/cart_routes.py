from flask import Blueprint, request, jsonify
from app.models import Review, User, Cart_Item
from ..models import db

cart_routes = Blueprint("carts", __name__)


@cart_routes.route("/<int:id>/")
def getCart(id):

    cart = Cart_Item.query.filter(Cart_Item.user_id == id).all()
    # print(cart[1].products)
    return {"cart": [item.to_dict() for item in cart]}
