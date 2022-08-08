from crypt import methods
from flask import Blueprint, request, jsonify
from app.models import Review, User, Cart_Item, Order
from ..models import db

order_routes = Blueprint("orders", __name__)


@order_routes.route("/<int:id>")
def loadOrder(id):

    orders = Order.query.filter(Order.user_id == id).all()

    return {"order": [order.to_dict() for order in orders]}


@order_routes.route("/", methods=["POST"])
def addOrder():

    user_id = request.json["user_id"]
    product_id = request.json["product_id"]
    quantity = request.json["quantity"]
    price = request.json["price"]
    street = request.json["street"]
    city = request.json["city"]
    state = request.json["state"]
    zip_code = request.json["zip_code"]
    country = request.json["country"]
    delivery_time = request.json["delivery_time"]
    delivery_status = request.json["delivery_status"]
    created_at = request.json["created_at"]

    order = Order(
        user_id=user_id,
        product_id=product_id,
        quantity=quantity,
        price=price,
        street=street,
        city=city,
        state=state,
        zip_code=zip_code,
        country=country,
        delivery_time=delivery_time,
        delivery_status=delivery_status,
        created_at=created_at,
    )

    db.session.add(order)
    db.session.commit()

    return {"order": [order.to_dict()]}


@order_routes.route("/<int:id>/edit", methods=["PUT"])
def updateOrder(id):

    order = Order.query.get(id)

    order.street = request.json["street"]
    order.city = request.json["city"]
    order.state = request.json["state"]
    order.zip_code = request.json["zip_code"]

    db.session.commit()

    return {"order": [order.to_dict()]}
