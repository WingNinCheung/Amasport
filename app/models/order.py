from .db import db
from sqlalchemy.orm import relationship


class orders(db.Model):
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
    updated_at = db.Column(db.DateTime)

    user = relationship("User", back_populates="orders")
