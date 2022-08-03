from app.models import db, Cart_Item


def seed_cart_items():

    cart1 = Cart_Item(user_id=1, product_id=2, quantity=1)
    cart2 = Cart_Item(user_id=1, product_id=3, quantity=1)
    cart3 = Cart_Item(user_id=2, product_id=1, quantity=1)

    db.session.add(cart1)
    db.session.add(cart2)
    db.session.add(cart3)

    db.session.commit()


def undo_cart_items():
    db.session.execute("TRUNCATE cart_items RESTART IDENTITY CASCADE;")
    db.session.commit()
