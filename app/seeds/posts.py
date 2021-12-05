from app.models import db, Post
from faker import Faker

fake = Faker()

def seed_posts():
    posts1 = Post(
        user_id= 2,
        content= 'My summer'
    )
    posts2 = Post(
        user_id= 2,
        content= 'Pretty cool graffiti'
    )
    posts3 = Post(
        user_id= 2,
        content= 'nightlife'
    )
    posts4 = Post(
        user_id= 2,
        content= "culture"
    )
    posts5 = Post(
        user_id= 2,
        content= 'redwood national forest'
    )
    posts6 = Post(
        user_id= 3,
        content= 'Swiss winter'
    )
    posts7 = Post(
        user_id= 3,
        content= None
    )
    posts8 = Post(
        user_id= 3,
        content= None
    )
    posts9 = Post(
        user_id= 3,
        content= 'Finding peace amongst the trees ✨'
    )
    posts10 = Post(
        user_id= 3,
        content= None
    )
    posts11 = Post(
        user_id= 4,
        content= None
    )
    posts12 = Post(
        user_id= 4,
        content= None
    )
    posts13 = Post(
        user_id= 4,
        content= None
    )
    posts14 = Post(
        user_id= 4,
        content= None
    )
    posts15 = Post(
        user_id= 4,
        content= None
    )
    posts16 = Post(
        user_id= 5,
        content= 'How do you say "Earth"in your language?🌍 What you can see here is a Typhoon Maysak, also known in the Philippines as Typhoon Chedeng. It was the most powerful pre-April tropical cyclone on record in the Northwestern Pacific Ocean! 👀'
    )
    posts17 = Post(
        user_id= 5,
        content= None
    )
    posts18 = Post(
        user_id= 5,
        content= 'Don\'t forget'
    )
    posts19 = Post(
        user_id= 5,
        content= 'Insane concert last night!'
    )
    posts20 = Post(
        user_id= 5,
        content= 'My France trip!'
    )

    db.session.add(posts1)
    db.session.add(posts2)
    db.session.add(posts3)
    db.session.add(posts4)
    db.session.add(posts5)
    db.session.add(posts6)
    db.session.add(posts7)
    db.session.add(posts8)
    db.session.add(posts9)
    db.session.add(posts10)
    db.session.add(posts11)
    db.session.add(posts12)
    db.session.add(posts13)
    db.session.add(posts14)
    db.session.add(posts15)
    db.session.add(posts16)
    db.session.add(posts17)
    db.session.add(posts18)
    db.session.add(posts19)
    db.session.add(posts20)

    db.session.commit()



def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()