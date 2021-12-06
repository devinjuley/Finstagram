from app.models import db, Comment
from faker import Faker
from random import randint

fake = Faker()

def seed_comments():

   comments = []
   for i in range(60):
      comment = Comment(
         user_id=randint(2,5),
         post_id=randint(1,20),
         content=fake.sentence()
      )
      comments.append(comment)

   for comment in comments:
      db.session.add(comment)

   db.session.commit()


def undo_comments():
   db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
   db.session.commit()
