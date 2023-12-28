from .db import db
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import ARRAY


class Product(db.Model):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(50), nullable=False)
    brand = db.Column(db.String(50), nullable=False)
    about = db.Column(db.String(1000), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    dimensions = db.Column(db.String(100), nullable=False)
    date_available = db.Column(db.String(100), nullable=False)
    manufacturer = db.Column(db.String(1000), nullable=False)
    asin = db.Column(db.String(100), nullable=False)
    images = db.Column(ARRAY(db.TEXT), nullable=True)


    cart_items = relationship("Cart_Item", back_populates="products")

    review = relationship("Review", back_populates="product")

    orders = relationship("Order", back_populates="product")


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
            "images": self.images,
        }

    def __repr__(self):
        return f"<Product ({self.id},{self.name}"
