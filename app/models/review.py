from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship


class Review(db.Model):
    __tablename__ = "reviews"
    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    product_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False
    )
    rating = db.Column(db.Integer, nullable=False)
    review_body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime)

    user = relationship("User", back_populates="reviews")

    product = relationship("Product", back_populates="review")

    def to_dict(self):

        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "rating": self.rating,
            "review_body": self.review_body,
            "created_at": self.created_at,
            "user": self.user.to_dict(),
        }

    def __repr__(self):
        return f"<Review ({self.user_id},{self.product_id}"
