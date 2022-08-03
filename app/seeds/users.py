from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username="Demo",
        email="demo@aa.io",
        password="password",
        street="22 3rd Street",
        city="San Francisco",
        state="CA",
        zip_code="99999",
        country="USA",
    )
    marnie = User(
        username="Marnie",
        email="marnie@aa.io",
        password="password",
        street="20 1rd Street",
        city="San Francisco",
        state="CA",
        zip_code="91111",
        country="USA",
    )
    bobbie = User(
        username="Bobbie",
        email="bobbie@aa.io",
        password="password",
        street="2222 Apple Street",
        city="San Francisco",
        state="CA",
        zip_code="91112",
        country="USA",
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
