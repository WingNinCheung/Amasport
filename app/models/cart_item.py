from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import relationship


class Cart_Item(db.Model):
    __tablename__ = "cart_items"
    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    product_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False
    )
    quantity = db.Column(db.Integer, nullable=False)

    user = relationship("User", back_populates="cart_items")

    products = relationship("Product", back_populates="cart_items")

    def to_dict(self):

        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
            "products": self.products.to_dict(),
        }

    def __repr__(self):
        return f"<Cart_Item ({self.id},{self.user_id},{self.product_id}"
