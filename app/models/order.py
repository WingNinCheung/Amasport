from .db import db
from sqlalchemy.orm import relationship


class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    total_price = db.Column(db.Float(), nullable=False)
    street = db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zip_code = db.Column(db.Integer, nullable=False)
    country = db.Column(db.String(50), nullable=False)
    delivery_time = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime)

    user = relationship("User", back_populates="orders")

    order_products = relationship(
        "Order_Product", back_populates="order", cascade="all, delete"
    )

    def to_dict(self):

        return {
            "id": self.id,
            "user_id": self.user_id,
            "total_price": self.total_price,
            "street": self.street,
            "city": self.city,
            "state": self.state,
            "zip_code": self.zip_code,
            "country": self.country,
            "delivery_time": self.delivery_time,
            "created_at": self.created_at,
        }
