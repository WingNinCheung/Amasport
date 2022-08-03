from .db import db
from sqlalchemy.orm import relationship


class Order_Product(db.Model):
    __tablename__ = "order_products"

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    order = relationship("Order", back_populates="order_products")

    product = relationship("Product", back_populates="order_products")

    def to_dict(self):

        return {
            "id": self.id,
            "order_id": self.order_id,
            "product_id": self.product_id,
            "quantity": self.quantity,
        }
