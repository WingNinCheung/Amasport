from flask import Blueprint
from sqlalchemy import null
from app.models import Review, User
from ..models import db

review_routes = Blueprint("reviews", __name__)


@review_routes.route("/<int:id>/")
def reviews(id):

    reviews = Review.query.filter(Review.product_id == id).all()

    if reviews:
        for i in reviews:
            review = {"reviews": i.to_dict(), "users": i.user.to_dict()}
        print(review)

        return {"reviews": [review]}

    # return {"reviews": [{"reviews": {"rating": "No Reviews Yet"}}]}
    print("******", reviews)
    return "1"
