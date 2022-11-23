from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products

# from .orders import seed_orders, undo_orders
from .cart_items import seed_cart_items, undo_cart_items
from .reviews import seed_reviews, undo_reviews

# from app.models.db import db, environment, SCHEMA


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    # if environment == "production":
    #     # Before seeding, truncate all tables prefixed with schema name
    #     db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    #     db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    #     db.session.execute(
    #         f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;"
    #     )
    #     db.session.execute(
    #         f"TRUNCATE table {SCHEMA}.cart_items RESTART IDENTITY CASCADE;"
    #     )
    #     # Add a truncate command here for every table that will be seeded.
    #     db.session.commit()
    seed_users()
    seed_products()
    # seed_orders()
    seed_cart_items()
    seed_reviews()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    # undo_orders()
    undo_cart_items()
    undo_reviews()
    undo_products()
    undo_users()

    # Add other undo functions here
