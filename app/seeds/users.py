from app.models import db, User
from faker import Faker

fake = Faker()

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='Demo',
        username='Demo',
        profile_image_url='https://media.discordapp.net/attachments/917128220552331345/919735578893889576/unknown.png',
        email='demo@aa.io',
        password='password')

    user1 = User(
        first_name='John',
        last_name='Adams',
        username='JAdams',
        profile_image_url='https://media.discordapp.net/attachments/917128220552331345/917135879775080458/49946859_605163983238131_143987782165987328_o-1.png',
        email=fake.email(),
        password=fake.password())

    user2 = User(
        first_name='Jason',
        last_name='Parks',
        username='JasonOP',
        profile_image_url='https://media.discordapp.net/attachments/917128220552331345/917138237850538034/unknown.png?width=475&height=686',
        email=fake.email(),
        password=fake.password())

    user3 = User(
        first_name='Susan',
        last_name='Swanson',
        username='MuffinMaster',
        profile_image_url='https://media.discordapp.net/attachments/917128220552331345/917138524585746502/unknown.png',
        email=fake.email(),
        password=fake.password())

    user4 = User(
        first_name='Orlando',
        last_name='Cortez',
        username='Legolas',
        profile_image_url='https://media.discordapp.net/attachments/917128220552331345/917137207133868042/orlando-ortiz-cfa472.png?width=686&height=686',
        email=fake.email(),
        password=fake.password()
    )

    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
