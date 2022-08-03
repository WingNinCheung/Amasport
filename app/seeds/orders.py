from app.models import db, Product, Order


def seed_orders():

    order1 = Order(
        user_id=1,
        total_price=76.99,
        street="1456 Clement Street",
        city="San Francisco",
        state="CA",
        zip_code=94111,
        country="USA",
        delivery_time=2,
    )

    order2 = Order(
        user_id=2,
        total_price=29.69,
        street="1421 3rd Street",
        city="San Francisco",
        state="CA",
        zip_code=95111,
        country="USA",
        delivery_time=2,
    )

    order3 = Order(
        user_id=3,
        total_price=49.53,
        street="1120 June Ave",
        city="San Francisco",
        state="CA",
        zip_code=95411,
        country="USA",
        delivery_time=2,
    )

    order4 = Order(
        user_id=1,
        total_price=18.22,
        street="1099 Washington Ave",
        city="San Francisco",
        state="CA",
        zip_code=95421,
        country="USA",
        delivery_time=2,
    )
    db.session.add(order1)
    db.session.add(order2)
    db.session.add(order3)
    db.session.add(order4)
    db.session.commit()


def undo_orders():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()
