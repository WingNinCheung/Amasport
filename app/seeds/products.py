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
        about="【Electric Ball Pump】BOMPOW electric ball pump can inflate quickly, safe and easy to use, The air pressure detection is accurate to 1 PSI, ranging from 0-12PSI, which supports preset pressure.【LCD Display & Flashlight】The LCD screen of the football pump displays the remaining battery power, the actual and preset air pressure.【Widely Application】The ball pump is suitable for athletic soccer, basketball, football, volleyball, rugby ball and other inflatables, not suitable for bicycle tires.【Portable and Lightweight】The size of the ball pump is 6 * 1 * 1inch, weight: 1LB.【USB Charging】The ball pump can be recharged by USB to any convenient port as your laptop, power bank or common socket",
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
        about="97% Polyester, 3% Spandex.Imported.Machine Wash.Cushloned in the foot for comfot and durability.Moisture-wicking yarns keep feet dry from sweat.Arch compression for a secure fit",
        description="Head to your workout or daily run in the adidas Athletic 6-Pack Low Cut Socks. Sold as a six-pair pack. Low-cut sock sits at the ankle. Climalite fabric technology wicks moisture away from the skin. Knit-in logo at cuff. 94% polyester, 3% nylon, 2% natural latex. Machine wash warm. Tumble dry low. Imported.",
        dimensions="5 x 5 x 0.7",
        date_available="March 3, 2012",
        manufacturer="adidas",
        asin="B007GJQHTQ",
        image="https://m.media-amazon.com/images/I/61ov4JfiwVS._AC_UX679_.jpg",
    )

    nike_ball = Product(
        name="NIKE Elite All-Court Basketball - Amber/Black/Metallic Silver/Black",
        price=37.75,
        category="Basketball",
        brand="Nike",
        about="Official Womens and Kids Size.Composite leather helps manage sweat control.Molded, deep-channel design allows for precise ball control.Indoor or Outdoor play",
        description="Take your game to higher levels with the Nike Elite All-Court Official Basketball. Control the ball in the heat of the game with the composite leather which helps manage sweat control.",
        dimensions="9.1 x 9 x 8",
        date_available="May 20, 2020",
        manufacturer="JR286",
        asin="B088YNLJ7Z",
        image="https://m.media-amazon.com/images/I/61fLvRrphLL._AC_.jpg",
    )

    hoop = Product(
        name="WETONG LED Basketball Hoop Lights - Solar Basketball Rim LED Light Swish",
        price=25.97,
        category="Basketball",
        brand="WETONG",
        about="LED basketball hoop lights - It lights up the edge of the basketball hoop and have up to Four unique light patterns, lights up the rim of your basketball hoop , perfect for evening parties or celebrations, and enjoy the fun of playing basketball at night.Basketball hoop light up rim - This is designed to any basketball hoop,made of high quality materials.What makes it unique as a basketball entertainment product is that enjoy the fun of playing basketball at night.1 Strand of LED Hoop lighting that will allow enough to light up your entire basketball rim, and 1 roll of high-quality Tape to fasten the lights to your basketball rim",
        description="Encourage physical exercise, let children out of the room, away from smart phones, computer, extend sport playing time into the night amplifies passion for basketball foster parent-child relationship, deepen friendship between friends!",
        dimensions="5.1 x 4.84 x 2.05",
        date_available="June 20, 2020",
        manufacturer="WETONG",
        asin="B08BCJF2ZQ",
        image="https://m.media-amazon.com/images/I/71uQw+pVsCL._AC_SX679_.jpg",
    )

    kryie = Product(
        name="Nike Men's Kyrie 7 Copa Basketball Shoes",
        price=329.99,
        category="Basketball",
        brand="Nike",
        about="100% Synthetic.Shown: Copa/Rattan/Roma Green/Dark Smoke Grey.Thin, padded tongue.Embroidered Kyrie signature on heel",
        description="Kyrie Irving is a creative force on and off the court. He needs his shoes to keep up with his playmaking, but also sync with his boundary-pushing style and ethos. Tuned for the next generation of energy return, control and speed, the Kyrie 7 helps players at all levels take advantage of their quick first step by optimizing the shoe's fit, court feel and banking ability.",
        dimensions="5.1 x 4.84 x 2.05",
        date_available="December 10, 2021",
        manufacturer="Nike",
        asin="B09NPQ4DYJ",
        image="https://m.media-amazon.com/images/I/81RBWXgIjAL._AC_UX575_.jpg",
    )

    kd14 = Product(
        name="Nike KD 14 Wolf Grey 2021 CW3935-100",
        price=259,
        category="Basketball",
        brand="Nike",
        about="Zero-Distraction Fit, Broken-In Feel - Multilayer mesh in the upper is lightweight and dimensional with a broken-in feel.Strap In - A hook-and-loop strap wraps over the top of the laces for support and a secure fit.Ultimate Responsive Sensation - The full-length Air Zoom Strobel unit is stitched directly to the upper.Tuned Traction - Grooves and ridges in the sole help provide multidirectional traction and court feel",
        description="KD is a creative force on and off the court. He needs his shoes to keep up with his playmaking, but also sync with his boundary-pushing style and ethos. Tuned for the next generation of energy return, control and speed.",
        dimensions="5.1 x 4.84 x 2.05",
        date_available="August 21, 2021",
        manufacturer="Nike",
        asin="B09DB3FBZK",
        image="https://m.media-amazon.com/images/I/71mX2N9l2QL._AC_UY575_.jpg",
    )

    curry6 = Product(
        name="Under Armour Boy's (GS) Curry 6 Basketball Shoe",
        price=89.54,
        category="Basketball",
        brand="Under Armour",
        about="Foam padding in the collar & heel for added comfort.Internal counter lining provides immediate step-in comfort & stability.Flexible plate adds support & stability to every move",
        description="Stephen went from a 3-star recruit to a 3x world champion through focus and controlling the court. Curry basketball shoes are built for his style of play—for quick response, stability, and to help you cover more ground.",
        dimensions="10.6 x 7.84 x 4.05",
        date_available="August 21, 2020",
        manufacturer="Under Armour",
        asin="B091SDYY8D",
        image="https://m.media-amazon.com/images/I/61hfZXpMLnS._AC_UX625_.jpg",
    )

    mamba = Product(
        name="Mamba #8#24 Jeresy Shirt, Men's Basketball Jersey,Basketball Tank for Basketball Fans(24, Medium)",
        price=26.99,
        category="Basketball",
        brand="URUHR",
        about="Jersey,Polyester,Mesh",
        description="Kobe's jersey",
        dimensions="13.6 x 10.84 x 1.05",
        date_available="May 29, 2021",
        manufacturer="URUHR",
        asin="B099PPP4KN",
        image="https://m.media-amazon.com/images/I/812C1ZZ+UsL._AC_UX679_.jpg",
    )

    shorts = Product(
        name="PRTCYPNT Men's 11'' Cool Basketball Shorts with Pockets Long Gym Athletic Shorts Running Quick-Dry Drawstring",
        price=29.99,
        category="Basketball",
        brand="PRTCYPNT",
        about="100% Polyester.Imported.Shell&Mesh lining 100% polyester material dries quickly and keeps you cool yet not see-through.These sport basketball shorts have Elastic waistband, adjustable drawstring and loose fit to provide added comfort",
        description="Elasticized waist with adjustable drawstring are quite strong which keeps the shorts from falling off.",
        dimensions="Size L 10.2",
        date_available="May 29, 2021",
        manufacturer="PRTCYPNT",
        asin="B09ZQCTHBF",
        image="https://m.media-amazon.com/images/I/714XbzhUdTL._AC_UX679_.jpg",
    )

    ten = Product(
        name="Penn Championship Tennis Balls - Extra Duty Felt Pressurized Tennis Balls",
        price=19.99,
        category="Tennis",
        brand="PENN",
        about="100% Wool.Imported.AMERICA'S #1 SELLING BALL: The product of 100 years worth of testing and perfecting; Penn Championship is the best selling tennis ball in America.",
        description="Penn Championship tennis balls represent the standard by which all other tennis balls are measured with consistent feel and playability every time you step onto the court.",
        dimensions="12 x 3 x 8.8",
        date_available="May 29, 2021",
        manufacturer="PRTCYPNT",
        asin="B0002JZEL4",
        image="https://m.media-amazon.com/images/I/91lZP+tyg0L._AC_SX679_.jpg",
    )

    tShoe = Product(
        name="ASICS Women's Gel-Dedicate 7 Tennis Shoes",
        price=69.89,
        category="Tennis",
        brand="ASICS",
        about="Imported.Rubber sole.TRUSSTIC technology and wrap-up outsole improve stability",
        description="The GEL-DEDICATE 7 tennis shoe offers good stability and a flexible feel to keep your mind centered during the match. This shoe's upper is constructed with synthetic leather materials to improve support. They keep your feet locked-in when you're switching directions and chasing down challenging shots.",
        dimensions="10 x 15 x 6",
        date_available="June 29, 2021",
        manufacturer="Asics",
        asin="B096QCPDWW",
        image="https://m.media-amazon.com/images/I/51cBqgO18XL._AC_UX625_.jpg",
    )

    soft = Product(
        name="RTP ShockSorb Original or Ultrasoft The Only Dampener Made for Pain Relief",
        price=18.50,
        category="Tennis",
        brand="TRP",
        about="Patented shock absorbent and vibration isolating material used in space shuttles and guns(recoil pads).Reduced most of the testers arm(wrist and tennis elbow) and shoulder pain from shock and vibrations.Softer feel than the Original ShockSorb (Original has more POP!).Lightweight 4 grams",
        description="Fully funded on Kickstarter and hundreds of reviews. Now available to all customers!",
        dimensions="4.96 x 2.68 x 0.63",
        date_available="November 29, 2021",
        manufacturer="TRP",
        asin="B09MV3MCKJ",
        image="https://m.media-amazon.com/images/I/41yNpoqhzlL._AC_SX466_.jpg",
    )

    net = Product(
        name="PROGOAL Tennis Net 42FT Professional Heavy Duty Nylon Net Double, Compatible with All Standard Tennis Posts, IncludedIndoor Outdoor Court",
        price=209.00,
        category="Tennis",
        brand="PROGOAL",
        about="nylon.Standard 42' Length, 4' Height tennis net. Ideal for use in clubhouses, schools, gyms and other locations with a community tennis court.This tennis net isn’t fussy about what posts it’s used with.Get your kids outside and moving! ProGoal Professional Tennis Net is ideal for adults' & little kids' casual play and sports training",
        description="Standard 42' Length, 4' Height tennis net. Ideal for use in clubhouses, schools, gyms and other locations with a community tennis court.",
        dimensions="42 x 10 x 9",
        date_available="November 29, 2021",
        manufacturer="ProGoal",
        asin="B08Y1MKS2Z",
        image="https://m.media-amazon.com/images/I/61OiffD3oaL._AC_SX466_.jpg",
    )

    tBag = Product(
        name="Sucipi Tennis Bag Professional Tennis Backpack for Men and Women Racket Bags Holds 2 Rackets",
        price=29.67,
        category="Tennis",
        brand="Sucipi",
        about="【Material】Sucipi tennis backpacks is made of high quality polyester material,durable and comfortable.【Product Feature】The tennis bag has a hidden back hook,can hanging freely, convenient and practical",
        description="Sucipi is a professional,trendy,multifunction and pratical outdoor sport brand,we are devoted to produce all kind of outdoor backpack and other outdoor products.",
        dimensions="16 x 17.2 x 9.8",
        date_available="November 29, 2021",
        manufacturer="ProGoal",
        asin="B08MTBF6JJ",
        image="https://m.media-amazon.com/images/I/71-GldGAQiL._AC_SX466_.jpg",
    )

    tRack = Product(
        name="LUNNADE Adult Tennis Rackets 2 Pack, 27 Inch Recreational Tennis Racquet with Cover",
        price=58.77,
        category="Tennis",
        brand="LUNNADE",
        about="【Ready to Play】 : This pre-strung and re-grip tennis racket comes with a full cover that has a strap.【Easy to Control】: 102 in² head size gives this tennis racket a big sweet spot,that greatly increase the hitting rate.【Solid and Light weight】: By adopting whole shaped technology,the tennis racket has the the characteristic of high intensity and durability",
        description="One-piece structure make the tennis racket more stable and reduce the shock",
        dimensions="28.7 x 11.93 x 2.48",
        date_available="November 29, 2021",
        manufacturer="Lunnade",
        asin="B097RB64Y4",
        image="https://m.media-amazon.com/images/I/71gAnuMI9oS._AC_SX679_.jpg",
    )

    tosser = Product(
        name="SCIFANTA Portable Tennis Ball Tosser(3.7lb) for Self-Play",
        price=129.99,
        category="Tennis",
        brand="SCIFANTA",
        about="[REFINE YOUR TECHNIQUES] With its automatic system the Tennis Ball Machine releases every 4 seconds, provides accurate feeds allowing practice techniques alone for hours! Forehand, backhand, volley, baseline, short balls, footwork and more.[SUITABLE FOR ALL LEVELS&AGES] With wide range of the ball feeding distance, any age or ability of players can practice alone with this personal feed buddy",
        description="With small size, light weight, multiple throwing range, AC&battery powered features.",
        dimensions="12.44 x 11.97 x 7.09",
        date_available="February 20, 2021",
        manufacturer="SCIFANTA",
        asin="B08X2RG61Q",
        image="https://m.media-amazon.com/images/I/61bKV1xImkL._AC_SX679_.jpg",
    )

    bar = Product(
        name="Ceiling Mountable Pull Up Bar, Small",
        price=117.41,
        category="Training",
        brand="STUD",
        about="HOME WORK OUT: Great for when you can't make it to the gym. Drill to your wall or ceiling.HAMMERTONE POWDER: Gym quality welded hammertone powder coated steel 600 lb weight capacity lifetime warranty.QUALITY BUILT: Sturdiest gym quality pull up bar available all mounting hardware included",
        description="HAMMERTONE POWDER: Gym quality welded hammertone powder coated steel 600 lb weight capacity lifetime warranty",
        dimensions="33 x 26 x 6",
        date_available="February 20, 2021",
        manufacturer="Stud",
        asin="B002X60W1G",
        image="https://m.media-amazon.com/images/I/71BLXxOaBgL._AC_SX466_.jpg",
    )

    pad = Product(
        name="Thai Kickboxing, 60CM Large Heavy Curved Kicking Striking Body Pad",
        price=50.99,
        category="Training",
        brand="RDX",
        about="MAYA HIDE LEATHER used in manufacturing the kick shields is lightweight and sturdy, making it capable of facing relentless strikes during MMA, Muay Thai, Krav Maga and other similar trainings.DENZO TRON SHEET AND SPONGEX PADDING is used in the 60cm long, 36cm wide and 13cm thick strike pads to provide sturdy and wide target area to practice your kicks comfortably.NYLON REINFORCED HANDLES are strategically placed to provide easy and comfortable grip while the adjustable straps ensure suitable fit on the forearms",
        description="Makes the RDX Kick Shield sturdy and durable which makes them ideal for practicing Boxing, MMA, Krav Maga and other combat sports.",
        dimensions="27.56 x 14.41 x 7.87",
        date_available="May 20, 2021",
        manufacturer="Stud",
        asin="B004XMO00M",
        image="https://m.media-amazon.com/images/I/716w4J3gk6L._AC_SX679_.jpg",
    )

    run = Product(
        name="Running Speed Training, 56 inch Speed Drills Resistance Parachute Running Sprint ",
        price=23.22,
        category="Training",
        brand="StillCool",
        about="100% Polyester.Drawstring closure.Experiments show that the speed increases, the resistance provided by the resistance parachute increasing",
        description="Please tie the belt around your waist, and run as fast as you can. The faster you run, the bigger resistance you get.",
        dimensions="7.56 x 1.4 x 4.87",
        date_available="May 20, 2014",
        manufacturer="StillCool",
        asin="B00UD4BQDS",
        image="https://m.media-amazon.com/images/I/61Kv7eVnr1L._AC_UX679_.jpg",
    )

    snShoe1 = Product(
        name="Feethit Womens Slip On Walking Shoes Non Slip Running Shoes ",
        price=30.95,
        category="Sneakers",
        brand="Feehit",
        about="Synthetic sole.Breathable Mesh Upper: The women sneaker upper is made of knitted mesh material featuring lightweight and breathable.Lightweight and Comfy Liner: Removable and soft insoles support the feet arches and it doesn't put too much pressure on your feet",
        description="Slip on design makes the sneakers easy on and off. The shoes are comfortable with and without socks, feeling just like running on cloud.",
        dimensions="7.56 x 1.4 x 4.87",
        date_available="May 20, 2020",
        manufacturer="Feehit",
        asin="B088W7FMYM",
        image="https://m.media-amazon.com/images/I/71SHutr-zyL._AC_UY625_.jpg",
    )

    snShoe2 = Product(
        name="Reebok Women's Club C Walking Shoe ",
        price=130.95,
        category="Sneakers",
        brand="Reebok",
        about="Synthetic sole.Imported.Shaft measures approximately low-top from arch.Rubber Sole",
        description="Reebok is an American-inspired global brand with a deep fitness heritage and a clear mission: To be the best fitness brand in the world. Not an easy one.",
        dimensions="11.46 x 7.68 x 4.69",
        date_available="November 20, 2020",
        manufacturer="Reebok",
        asin="B09H5BLDNH",
        image="https://m.media-amazon.com/images/I/61GIsOj8kLL._AC_UX625_.jpg",
    )
    snShoe3 = Product(
        name="Tommy Hilfiger Women's Luster Sneaker",
        price=41.30,
        category="Sneakers",
        brand="Tommy Hilfiger",
        about="100% Synthetic.Imported.Rubber sole",
        description="Tommy Hilfiger is a leading designer lifestyle brands and internationally recognized for celebrating the essence of classic American cool style, featuring preppy with a twist designs.",
        dimensions="12.1 x 7 x 4",
        date_available="April 20, 2020",
        manufacturer="Tommy Hilfiger",
        asin="B07QRV1S4D",
        image="https://m.media-amazon.com/images/I/81eaoz5WVqL._AC_UX625_.jpg",
    )

    snShoe4 = Product(
        name="Nike Men's Basketball Shoes",
        price=126.89,
        category="Sneakers",
        brand="Nike",
        about="Rubber sole.Perforated outer material made of leather, synthetic and textile provides a comfortable grip and breathability.A classic Nike Air sole on the heel provides cushioning from the court to the street.An embroidered jumpman on the heel and an embroidered jumpman mark on the tongue provide a touch of quality",
        description="Jordan shoes, practical and fashionable.",
        dimensions="12.36 x 8.74 x 4.57",
        date_available="April 20, 2019",
        manufacturer="Nike",
        asin="B07SMSY5RD",
        image="https://m.media-amazon.com/images/I/61EWznN7P6L._AC_UY625_.jpg",
    )

    top1 = Product(
        name="6 Pieces Women Basic Crop Tank Tops Sleeveless Racerback Sport Crop Top",
        price=22.99,
        category="Shirts&Tops",
        brand="Nike",
        about="95% Cotton, 5% Spandex.Package contents: you will get 6 pieces of basic crop tank tops available in different colors, enough quantity and assorted color for you to choose and have a different wearing enjoyment.Wear with comfort: these women's basic crop tank tops are mainly made of 95% cotton 5% spandex, soft and lightweight to touch, comfortable and breathable to wear, have good elasticity, comfortable for you to wear for a long time",
        description="Diverse wearing occasions: these practical sleeveless racerback crop tops are suitable for both indoor and outdoor activities, you can wear them when running, doing yoga or other exercises in a gyms club",
        dimensions="12.32 x 8.23 x 1.57",
        date_available="April 10, 2021",
        manufacturer="Geyoga",
        asin="B08YK21SP4",
        image="https://m.media-amazon.com/images/I/711pYNlWgkL._AC_UY741_.jpg",
    )

    top2 = Product(
        name="TBMPOY Men's Long Sleeve Rash Guard Shirts UPF 50+ Sun Protection Hiking Shirts Lightweight Outdoor",
        price=16.99,
        category="Shirts&Tops",
        brand="TPMPOY",
        about="95% Cotton, 5% Spandex.Lightweight and breathable material wicks moisture away from your skin, breathes freely and dries quickly for cool comfort.UPF 50+ sun protection fabric protects your skin from the sun's harmful UVA and UVB.Raglan sleeves design ensures a full range of motion and eliminate shoulder seam chafing",
        description="Lightweight and breathable material wicks moisture away from your skin, breathes freely and dries quickly for cool comfort",
        dimensions="12.32 x 8.23 x 1.57",
        date_available="April 10, 2022",
        manufacturer="TBMPOY",
        asin="B0B4K147HF",
        image="https://m.media-amazon.com/images/I/61J9YSdjLWL._AC_UX569_.jpg",
    )

    skBoard = Product(
        name="INFIDEZ Wooden Large Skateboard Ramp for Jumping, Foldable Launch Ramp for Skateboard",
        price=57.99,
        category="Skateboarding",
        brand="INFIDEX",
        about="High Quality Material. The sturdy skateboard ramp made of solid wood.The jumping ramp comes in two color red and black with reliable lock structure.The skateboard ramp has slip-resistant surface and non-slip rubber feet.The portable skateboard ramp assembles in 30 seconds, no tools required, and easy to take apart to store, and loaded into car",
        description="The jumping ramp is not only for skateboard ramps and jumps but also for bike, scooter, BMX, roller skates and more",
        dimensions="26 x 24 x 2",
        date_available="March 10, 2022",
        manufacturer="INFIDEZ",
        asin="B09WQQ9MW1",
        image="https://m.media-amazon.com/images/I/51qs2dhHPDL._AC_SX679_.jpg",
    )

    pad = Product(
        name="Knee Pads For Kids/Adult Elbows Pads Wrist Guards 3 In 1 Protective Gear Set For Skateboarding",
        price=23.32,
        category="Skateboarding",
        brand="STARPOW",
        about="[IMPACT RESISTANT]: Made of durable, soft EVA padded material with tough plastic plates.[COMPREHENSIVE PROTECTION]: The knee pads and elbow pads are sleeves, not just a couple straps.[MULTIPLE USAGE SCENARIOS]: Appropriate for BMX, Rollerblading, Skating, Skateboard, Cycling, Playing scooter and other extreme sports",
        description="Fully safety equipment set can relieve your injury, Explore your extreme talent.",
        dimensions="11.02 x 6.3 x 3.15",
        date_available="March 10, 2022",
        manufacturer="INFIDEZ",
        asin="B07MWCB55D",
        image="https://m.media-amazon.com/images/I/61D1ImIH0zL._AC_SX466_.jpg",
    )

    board1 = Product(
        name="Magneto Mini Cruiser Skateboard Cruiser | 27.5 x 7.5 | Short Board | Canadian Maple Deck",
        price=99.99,
        category="Skateboarding",
        brand="Magneto",
        about="MADE BY SKATERS All of our boards are designed by skaters and inspired by our location in Southern California, the birthplace of longboarding.SUPER PORTABLE Designed to be fun to ride and easy to carry around, this is our go-to board for anyone who skates everywhere.DOUBLE KICKTAILS Double kick tails add fun and versatility to the mini cruiser skateboard.HIGH QUALITY DECK Manufactured from 6 full plies of Canadian Maple, the deck is very strong and durable",
        description="Designed to be fun to ride and portable to carry around, this is our go-to board for anyone who skates everywhere. The double kick tails really take the board to the next level of fun and performance",
        dimensions="29 x 8.25 x 4.2",
        date_available="July 10, 2018",
        manufacturer="Magneto",
        asin="B07PDHRQ43",
        image="https://m.media-amazon.com/images/I/811jJuvz0-S._AC_SX679_.jpg",
    )

    hel = Product(
        name="Retrospec Bike-Helmets Retrospec Dakota Bicycle/Skateboard Helmet for Adults",
        price=26.99,
        category="Skateboarding",
        brand="Retrospec",
        about="PREMIUM PROTECTION: Hard and fully formed ABS surrounds high quality EPS foam to absorb shock and keep you riding safely in this Retrospec helmet as you ride on your bicycles, skateboards, roller skates and scooters.VENTILATION: The classic skate design helmet with 10 vents to keep you cool and comfortable for a casual ride or a long day on your board.ADJUSTABLE FIT: Size in crucial for maximum protection",
        description="Retrospec Dakota helmet has arrived and is ready to keep you safe. The classic skate design complements its ultimate head protection. Our helmets are impact resistant for virtually all of your action sport shenanigans. Hard and fully formed ABS surrounds high quality EPS foam to absorb shock and keep you safe",
        dimensions="13.98 x 11.1 x 7.09 ",
        date_available="May 11, 2020",
        manufacturer="Retrospec",
        asin="B094Q545D4",
        image="https://m.media-amazon.com/images/I/815GyimG52S._AC_SX466_.jpg",
    )

    db.session.add(basketball)
    db.session.add(pump)
    db.session.add(tennis_Racket)
    db.session.add(sock)

    # basketball
    db.session.add(nike_ball)
    db.session.add(hoop)
    db.session.add(kryie)
    db.session.add(kd14)
    db.session.add(curry6)
    db.session.add(mamba)
    db.session.add(shorts)
    db.session.add(net)

    # Tennis

    db.session.add(ten)
    db.session.add(tShoe)
    db.session.add(soft)
    db.session.add(tBag)
    db.session.add(tRack)
    db.session.add(tosser)

    # Training

    db.session.add(bar)
    db.session.add(pad)
    db.session.add(run)

    # Sneakers

    db.session.add(snShoe1)
    db.session.add(snShoe2)
    db.session.add(snShoe3)
    db.session.add(snShoe4)

    # Shirts & tops
    db.session.add(top1)
    db.session.add(top2)

    # Skateboarding
    db.session.add(skBoard)
    db.session.add(pad)
    db.session.add(board1)
    db.session.add(hel)
    db.session.commit()


def undo_products():
    db.session.execute("TRUNCATE products RESTART IDENTITY CASCADE;")
    db.session.commit()
