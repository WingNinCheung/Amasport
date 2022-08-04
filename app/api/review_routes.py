from crypt import methods
from flask import Blueprint, request
from sqlalchemy import null
from app.models import Review, User, review
from ..models import db

review_routes = Blueprint("reviews", __name__)


@review_routes.route("/<int:id>/")
def reviews(id):

    reviews = Review.query.filter(Review.product_id == id).all()

    print("****", reviews)
    reviewArr = []
    if reviews:
        # for i in reviews:
        #     review = {"reviews": i.to_dict(), "users": i.user.to_dict()}
        # print("BBBBBBB", review)

        # return {"reviews": [review]}

        return {"reviews": {"reviews": [review.to_dict() for review in reviews]}}
        # return {"reviews"}

    return "1"


@review_routes.route("/<int:id>/add", methods=["POST"])
def addReview(id):

    user_id = request.json["user_id"]
    rating = request.json["rating"]
    review_body = request.json["review_body"]
    created_at = request.json["created_at"]

    review = Review(
        user_id=user_id,
        product_id=id,
        rating=rating,
        review_body=review_body,
        created_at=created_at,
    )

    db.session.add(review)
    db.session.commit()

    format_review = {"reviews": review.to_dict(), "users": review.user.to_dict()}
    print("*****", format_review)
    return {"reviews": [format_review]}
