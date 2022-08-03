from app.models import db, Order_Product


def seed_order_products():

    order_product1 = Order_Product(order_id=1, product_id=1, quantity=1)
    order_product2 = Order_Product(order_id=2, product_id=2, quantity=1)
    order_product3 = Order_Product(order_id=3, product_id=3, quantity=1)
    order_product4 = Order_Product(order_id=4, product_id=4, quantity=1)

    db.session.add(order_product1)
    db.session.add(order_product2)
    db.session.add(order_product3)
    db.session.add(order_product4)

    db.session.commit()


def undo_order_products():
    db.session.execute("TRUNCATE orders RESTART IDENTITY CASCADE;")
    db.session.commit()
