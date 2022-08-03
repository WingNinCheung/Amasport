from unicodedata import category
from app.models import db, Product


def seed_products():

    basketball = Product(
        name="WILSON Evolution Game Basketball",
        price=76.99,
        category="Basketball",
        brand="Wilson",
        about="THE #1 INDOOR BALL: The Evolution is the #1 indoor game basketball in America, on more courts than any other basketball.SIGNATURE EVO FEEL: The soft feel that the Evolution basketball is famous for is due it is Cushion Core Carcass, making the ball softer to the touch and easier to grip around the rim.GRIP & DURABILITY: The Premium Evo Microfiber Composite Cover provides grip that players love and durability to last all-season and beyond.ULTIMATE CONTROL: Laid-in Composite Channels create a consistent feel and texture over the entire surface of the basketball to provide unparalleled control.NFHS APPROVED: Approved for play by the National Federation of State High School Associations",
        description="When you focus on getting better, and not just on getting results, success takes care of itself. That is why the Wilson Evolution Game Ball is the preferred basketball in high schools across the country. Every part from the moisture-wicking composite cover to the laid-in channels provides exceptional performance for those who are not satisfied with being satisfied. Suited for indoor use.",
        dimensions="9 x 9 x 9",
        date_available="August 2, 2021",
        manufacturer="Wilson Sporting Goods - Team",
        asin="B00KXVPN8A",
        image="https://m.media-amazon.com/images/I/71FqoE-kMjL._AC_SX466_.jpg",
    )

    pump = Product(
        name="BOM Electric Ball Pump, Ball Pump for Sports Balls Air Pump with LCD Display",
        price=29.69,
        category="other",
        brand="BOM",
        about="【Electric Ball Pump】BOMPOW electric ball pump can inflate quickly, safe and easy to use, The air pressure detection is accurate to 0.1PSI, ranging from 0-12PSI, which supports preset pressure.【LCD Display & Flashlight】The LCD screen of the football pump displays the remaining battery power, the actual and preset air pressure.【Widely Application】The ball pump is suitable for athletic soccer, basketball, football, volleyball, rugby ball and other inflatables, not suitable for bicycle tires.【Portable and Lightweight】The size of the ball pump is 6 * 1 * 1inch, weight: 1LB.【USB Charging】The ball pump can be recharged by USB to any convenient port as your laptop, power bank or common socket",
        description="Portable and lightweight, carry around easily. Quick and high pressure, save the precious time.Reliable and efficient, no worry to damage quickly.Sleek and compact design, very comportable to hold in hand. Intelligent and precise, reach the preset pressure, stop automatically",
        dimensions="14 x 4 x 9",
        date_available="August 17, 2021",
        manufacturer="BOM",
        asin="B08ZDHLQV1",
        image="https://m.media-amazon.com/images/I/61R2d6UqWCL._AC_SX679_.jpg",
    )

    tennis_Racket = Product(
        name="Tennis Rackets 2 Players Recreational for Beginners ,Pre-Strung 27 Inch Light Adult Racquet Set for Women Men with Tennis Balls",
        price=49.53,
        category="Tennis",
        brand="Layway",
        about="8 in 1 VALUE PACK - the Tennis Racquet Set comes with 2x 27 inches tennis rackets,2x Tennis Balls, 2x Handle Grips and 1x Portable Racket Cover,which is suitable for students, lovers, the elderly, starters or intermediate players.PRESTRUNG with RIGHT TENTION - Just do the game with your partners upon receipt of the package set.LIGHTWEIGHT&COMFORTABLE - each racket weighs only 0.57lb, so you will not feel tired after long time use and make you play superbly on the field.MULTIPLE OCCASIONS&GIFT SET - it can be gifted for your love ones and suitable for most occasions, such as tennis courts, parks near home or office, beaches or school playfield etc,just have fun with the recreational tennis rackets set in your spare time :)",
        description="The tennis racket you want! Whether you are an amateur tennis player or just enjoy playing on the court, you need a tennis racket that allows you to play superbly so you can more easily get your game on the court.",
        dimensions="27.5 x 12 x 2",
        date_available="September 7, 2021",
        manufacturer="Layway",
        asin="B09FL5TQWJ",
        image="https://m.media-amazon.com/images/I/61-Vc0AUkxL._AC_SX679_.jpg",
    )

    sock = Product(
        name="adidas Athletic 6-Pack Low Cut Socks",
        price=18.22,
        category="other",
        brand="Adidas",
        about="97% Polyester, 3% Spandex.Imported.Machine Wash.Cushloned in the foot for comfot and durability.Moisture-wicking yarns keep feet dry from sweat.Arch compression for a secure fit.",
        description="Head to your workout or daily run in the adidas Athletic 6-Pack Low Cut Socks. Sold as a six-pair pack. Low-cut sock sits at the ankle. Climalite fabric technology wicks moisture away from the skin. Knit-in logo at cuff. 94% polyester, 3% nylon, 2% natural latex. Machine wash warm. Tumble dry low. Imported.",
        dimensions="5 x 5 x 0.7",
        date_available="March 3, 2012",
        manufacturer="adidas",
        asin="B007GJQHTQ",
        image="https://m.media-amazon.com/images/I/61ov4JfiwVS._AC_UX679_.jpg",
    )

    db.session.add(basketball)
    db.session.add(pump)
    db.session.add(tennis_Racket)
    db.session.add(sock)

    db.session.commit()


def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()
