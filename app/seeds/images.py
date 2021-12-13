from app.models import db, Image
from faker import Faker

fake = Faker()


def seed_images():
    image1 = Image(
        user_id=2,
        post_id=1,
        image_url='https://media.discordapp.net/attachments/916404038256451604/916410038971691058/120259729_05.png?width=915&height=686'
    )
    image2 = Image(
        user_id=2,
        post_id=2,
        image_url='https://media.discordapp.net/attachments/916404184071405638/917107769289638028/vc3ytldj9asz.png?width=916&height=686'
    )
    image3 = Image(
        user_id=2,
        post_id=2,
        image_url='https://media.discordapp.net/attachments/916404184071405638/917115781165248533/0a7e54c2d8a9e4d6240836c93b44cc1a--night-club-graffiti-art.png'
    )
    image4 = Image(
        user_id=2,
        post_id=3,
        image_url='https://media.discordapp.net/attachments/916404209002377227/917109017841647746/bar-nightlife-ginger-beer-friends.png?width=1220&height=686'
    )
    image5 = Image(
        user_id=2,
        post_id=3,
        image_url='https://media.discordapp.net/attachments/916404209002377227/917116000166633482/first-year-of-marriage-who-do-you-hang-out-with-more-HEADER.png'
    )
    image6 = Image(
        user_id=2,
        post_id=4,
        image_url='https://media.discordapp.net/attachments/916404386434011136/917109461523505172/taktshang-36.png'
    )
    image7 = Image(
        user_id=2,
        post_id=5,
        image_url='https://media.discordapp.net/attachments/916404408244383764/917110455892332584/bigstock-Redwood-Tree-34473131.png?width=1029&height=686'
    )
    image8 = Image(
        user_id=2,
        post_id=5,
        image_url='https://media.discordapp.net/attachments/916404408244383764/917114622962724925/475P3Fern-Canyon_fe37752a-5056-a36a-09fbefd69d760f20.png'
    )
    image9 = Image(
        user_id=2,
        post_id=5,
        image_url='https://media.discordapp.net/attachments/916404408244383764/917114722116075530/shutterstock_559873912.png'
    )
    image10 = Image(
        user_id=2,
        post_id=5,
        image_url='https://media.discordapp.net/attachments/916404408244383764/917115116951048242/redwoods-copy.png'
    )
    image11 = Image(
        user_id=3,
        post_id=6,
        image_url='https://media.discordapp.net/attachments/916404426820943882/917112474094940250/Beautiful-Zermatt-City-min-800x534.png'
    )
    image12 = Image(
        user_id=3,
        post_id=6,
        image_url='https://media.discordapp.net/attachments/916404426820943882/917115234345418853/featured__40_.png?width=986&height=686'
    )
    image13 = Image(
        user_id=3,
        post_id=7,
        image_url='https://media.discordapp.net/attachments/916404449457635328/917115467490013254/flatirons-boulder-colorado.png'
    )
    image14 = Image(
        user_id=3,
        post_id=7,
        image_url='https://media.discordapp.net/attachments/916404449457635328/917115629960560660/snow-dusted-flatirons-boulder-colorado-james-bo-insogna.png'
    )
    image15 = Image(
        user_id=3,
        post_id=8,
        image_url='https://media.discordapp.net/attachments/916404476812873760/917117134902014112/LOSTLANDS2021thank-you-1200x800jakewestphoto-1.png?width=1028&height=686'
    )
    image16 = Image(
        user_id=3,
        post_id=8,
        image_url='https://media.discordapp.net/attachments/916404476812873760/917117185548242974/Lost-Lands-e1617316262633.png'
    )
    image17 = Image(
        user_id=3,
        post_id=9,
        image_url='https://media.discordapp.net/attachments/916404503144701992/917118795213070367/unknown.png?width=535&height=686'
    )
    image18 = Image(
        user_id=3,
        post_id=9,
        image_url='https://media.discordapp.net/attachments/916404503144701992/917118856911261756/unknown.png?width=500&height=686'
    )
    image19 = Image(
        user_id=3,
        post_id=9,
        image_url='https://media.discordapp.net/attachments/916404503144701992/917118918903087125/unknown.png?width=507&height=686'
    )
    image20 = Image(
        user_id=3,
        post_id=10,
        image_url='https://media.discordapp.net/attachments/916404526389547099/917138772074844180/unknown.png'
    )
    image21 = Image(
        user_id=4,
        post_id=11,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919793810844827648/chocolate-muffins-17.png?width=1035&height=686'
    )
    image22 = Image(
        user_id=4,
        post_id=11,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919793857263198258/Banana-Muffins-3.png?width=457&height=686'
    )
    image23 = Image(
        user_id=4,
        post_id=11,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919793897968914492/opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__06__Blueberry-Muffins-LEAD-3-a26ccd8e326b46c28ebf375a95fc3eb5.png?width=1029&height=686'
    )
    image24 = Image(
        user_id=4,
        post_id=11,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919793998548324372/image.png?width=915&height=686'
    )
    image25 = Image(
        user_id=4,
        post_id=12,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919794796715970640/Pineapple-Muffins-1.png?width=457&height=686'
    )
    image26 = Image(
        user_id=4,
        post_id=12,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919795072730533898/pumpkin_muffins.png?width=457&height=686'
    )
    image27 = Image(
        user_id=4,
        post_id=13,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919795152090955816/double-chocolate-muffins-3.png?width=490&height=686'
    )
    image28 = Image(
        user_id=4,
        post_id=13,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919795404248342579/sweet-potato-muffins-1.png?width=686&height=686'
    )
    image29 = Image(
        user_id=4,
        post_id=14,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919795404248342579/sweet-potato-muffins-1.png?width=686&height=686'
    )
    image30 = Image(
        user_id=4,
        post_id=15,
        image_url='https://media.discordapp.net/attachments/917128220552331345/919795476285493298/Easy-Lemon-Blueberry-Muffins-3.png?width=1029&height=686'
    )
    image31 = Image(
        user_id=5,
        post_id=16,
        image_url='https://media.discordapp.net/attachments/916404665262960641/917118228424179722/unknown.png?width=518&height=686'
    )
    image32 = Image(
        user_id=5,
        post_id=16,
        image_url='https://media.discordapp.net/attachments/916404665262960641/917118352776912926/unknown.png?width=519&height=686'
    )
    image33 = Image(
        user_id=5,
        post_id=16,
        image_url='https://media.discordapp.net/attachments/916404665262960641/917118463493943427/unknown.png?width=539&height=686'
    )
    image34 = Image(
        user_id=5,
        post_id=17,
        image_url='https://media.discordapp.net/attachments/916404684758073404/917117835371749417/unknown.png?width=597&height=686'
    )
    image35 = Image(
        user_id=5,
        post_id=18,
        image_url='https://media.discordapp.net/attachments/916404712658596001/917117245409341500/image0.jpg?width=568&height=685'
    )
    image36 = Image(
        user_id=5,
        post_id=19,
        image_url='https://media.discordapp.net/attachments/916404913913888809/917116097491247114/unknown.png'
    )
    image37 = Image(
        user_id=5,
        post_id=20,
        image_url='https://media.discordapp.net/attachments/916404937632653382/917115106855387146/CH-asset-France_l2r_main.png'
    )
    image38 = Image(
        user_id=5,
        post_id=20,
        image_url='https://media.discordapp.net/attachments/916404937632653382/917115211914305587/original_shutterstock_1979689886.png?width=1029&height=686'
    )
    image39 = Image(
        user_id=5,
        post_id=20,
        image_url='https://media.discordapp.net/attachments/916404937632653382/917115342692708444/80283253.png?width=915&height=686'
    )

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)
    db.session.add(image37)
    db.session.add(image38)
    db.session.add(image39)

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
