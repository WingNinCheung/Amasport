from app.models import db, Review


def seed_reviews():

    review1 = Review(
        user_id=1,
        product_id=1,
        rating=5,
        review_body="The Wilson evolution has been my go-to ball for years ever since I started playing basketball indoors. The leather is premium and always grips your hand so you feel more in control of the ball and it is trajectory. I have never had a bad time playing with this basketball cannot go wrong with this purchase",
    )
    review2 = Review(
        user_id=2,
        product_id=2,
        rating=2,
        review_body="Too high tech and pricy",
    )
    review3 = Review(
        user_id=3,
        product_id=3,
        rating=4,
        review_body="It was ok",
    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.commit()


def undo_reviews():
    db.session.execute("TRUNCATE reviews RESTART IDENTITY CASCADE;")
    db.session.commit()
