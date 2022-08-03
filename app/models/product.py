from .db import db
from sqlalchemy.orm import relationship


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(500), nullable=False, unique=True)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    brand = db.Column(db.String(50), nullable=False)
    about = db.Column(db.String(1000), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    dimensions = db.Column(db.String(100), nullable=False)
    date_available = db.Column(db.String(100), nullable=False)
    manufacturer = db.Column(db.String(1000), nullable=False)
    asin = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(1000), nullable=False)

    order_products = relationship("Order_Product", back_populates="product")

    cart_items = relationship("Cart_Item", back_populates="products")

    review = relationship("Review", back_populates="product")

    def to_dict(self):

        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "category": self.category,
            "brand": self.brand,
            "about": self.about,
            "description": self.description,
            "dimensions": self.dimensions,
            "date_available": self.date_available,
            "manufacturer": self.manufacturer,
            "asin": self.asin,
            "image": self.image,
        }
