from crypt import methods
from flask import Blueprint, request, jsonify
from app.models import Review, User, Cart_Item
from ..models import db

cart_routes = Blueprint("carts", __name__)


@cart_routes.route("/<int:id>")
def getCart(id):

    cart = Cart_Item.query.filter(Cart_Item.user_id == id).all()
    # print(cart[1].products)
    return {"cart": [item.to_dict() for item in cart]}


@cart_routes.route("/<userId>/<productId>/<qty>", methods=["PUT"])
def updateQty(userId, productId, qty):
    print("In DB!!!!!!!!!!!")

    cart = Cart_Item.query.filter(
        Cart_Item.user_id == userId, Cart_Item.product_id == productId
    )

    cart[0].quantity = qty

    db.session.commit()

    return {"cart": [item.to_dict() for item in cart]}


@cart_routes.route("/<userId>/<productId>/add", methods=["POST"])
def createItem(userId, productId):
    new_item = Cart_Item(user_id=userId, product_id=productId, quantity=request.json)

    db.session.add(new_item)
    db.session.commit()

    return {"cart": [new_item.to_dict()]}


@cart_routes.route("/<userId>/<productId>/delete", methods=["DELETE"])
def deleteItem(userId, productId):

    items = Cart_Item.query.filter(
        Cart_Item.user_id == userId, Cart_Item.product_id == productId
    ).all()

    for item in items:
        db.session.delete(item)

    db.session.commit()
    return jsonify("Successfully deleted")
