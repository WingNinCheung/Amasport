from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .orders import seed_orders, undo_orders
from .order_products import seed_order_products, undo_order_products

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    seed_users()
    seed_products()
    seed_orders()
    seed_order_products()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_users()
    undo_products()
    undo_orders()
    undo_order_products()
    # Add other undo functions here
