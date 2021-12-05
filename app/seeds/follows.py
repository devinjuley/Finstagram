from app.models import db, follows
from faker import Faker
from sqlalchemy import insert

fake = Faker()

def seed_follows():
    follow1 = insert(follows).values(
        follower_id= 2,
        followed_id= 3
    )
    follow2 = insert(follows).values(
        follower_id= 2,
        followed_id= 4
    )
    follow3 = insert(follows).values(
        follower_id= 2,
        followed_id= 5
    )
    follow4 = insert(follows).values(
        follower_id= 3,
        followed_id= 2
    )
    follow5 = insert(follows).values(
        follower_id= 3,
        followed_id= 4
    )
    follow6 = insert(follows).values(
        follower_id= 3,
        followed_id= 5
    )
    follow7 = insert(follows).values(
        follower_id= 4,
        followed_id= 2
    )
    follow8 = insert(follows).values(
        follower_id= 4,
        followed_id= 3
    )
    follow9 = insert(follows).values(
        follower_id= 4,
        followed_id= 5
    )
    follow10 = insert(follows).values(
        follower_id= 5,
        followed_id= 2
    )
    follow11 = insert(follows).values(
        follower_id= 5,
        followed_id= 3
    )
    follow12 = insert(follows).values(
        follower_id= 5,
        followed_id= 4
    )
    
    db.session.execute(follow1)
    db.session.execute(follow2)
    db.session.execute(follow3)
    db.session.execute(follow4)
    db.session.execute(follow5)
    db.session.execute(follow6)
    db.session.execute(follow7)
    db.session.execute(follow8)
    db.session.execute(follow9)
    db.session.execute(follow10)
    db.session.execute(follow11)
    db.session.execute(follow12)

    db.session.commit()



def undo_follows():
    db.session.execute('TRUNCATE follows RESTART IDENTITY CASCADE;')
    db.session.commit()