from app.models import db, Product, Order


def seed_orders():

    order1 = Order(
        user_id=1,
        product_id=1,
        quantity=1,
        price=76.99,
        street="1456 Clement Street",
        city="San Francisco",
        state="CA",
        zip_code=94111,
        country="USA",
        delivery_time=2,
        delivery_status="Pending",
    )

    order2 = Order(
        user_id=2,
        product_id=2,
        quantity=1,
        price=29.69,
        street="1421 3rd Street",
        city="San Francisco",
        state="CA",
        zip_code=95111,
        country="USA",
        delivery_time=2,
        delivery_status="Pending",
    )

    order3 = Order(
        user_id=3,
        product_id=3,
        quantity=1,
        price=49.53,
        street="1120 June Ave",
        city="San Francisco",
        state="CA",
        zip_code=95411,
        country="USA",
        delivery_time=2,
        delivery_status="Pending",
    )

    order4 = Order(
        user_id=1,
        product_id=4,
        quantity=1,
        price=18.22,
        street="1099 Washington Ave",
        city="San Francisco",
        state="CA",
        zip_code=95421,
        country="USA",
        delivery_time=2,
        delivery_status="Pending",
    )

    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    db.session.add(order4)
    db.session.commit()


def undo_orders():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()
