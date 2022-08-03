from .db import db
from sqlalchemy.orm import relationship


class Cart_Item(db.Model):
    __tablename__ = "cart_items"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    user = relationship("User", back_populates="cart_items")

    products = relationship("Product", back_populates="cart_items")

    def to_dict(self):

        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
        }

    def __repr__(self):
        return f"<Cart_Item ({self.id},{self.user_id},{self.product_id}"
