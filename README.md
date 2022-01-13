## Summary
[Finstagram](https://finstagram-social.herokuapp.com/) is an Instagram clone with very slight variations to HTML/CSS.  Users can sign-up/login and create posts with photos or make comments on posts.  Logged in users can also edit/delete their own posts and comments.

## Overall Structure
The app includes the following four features: full CRUD for posts, full CRUD for comments, search for user by username/first name/last name, and the ability to follow other users and have their posts populate your main feed.
### List of features
* Create an account
* Login and logout
* Login as a demo user
* Create a post with an image included by clicking the create post symbol in the navbar
* Edit a post
* Delete a post
* Create a comment on a post
* Edit a comment
* Delete a comment
* View all posts by clicking the discover symbol in the navbar
* View the profile page of other users
* Follow other users by clicking the follow button on their profile page
* Unfollow other users by clicking the unfollow button on their profile page
* Clicking on a post makes the post full screen where you can view the caption and comments

## Backend
All backend routes were designed in Flask using Python coding language
## Frontend
All frontend routes and components were designed in React using Javascript coding language

### Dependencies
* alembic
* click
* dnspython
* email-validator
* faker
* flask-cors
* flask-login
* flask-migrate
* flask-sqlalchemy
* flask-wtf
* flask
* greenlet
* gunicorn
* idna
* itsdangerous
* mako
* markupsafe
* python-dateutil
* python-dotenv
* python-editor
* setuptools
* six
* sqlalchemy
* text-unidecode
* werkzeug
* wtforms

## Login/Splash Page
When an unregistered user first visits the website, they are presented with a Splash page that includes a login form and a link to sign up.
![GitHub Logo](https://i.imgur.com/eHdW809.png)

## Sign-up Page
When a user clicks sign up on the login/splash page, they are redirected to the sign-up form to create an account.
![GitHub Logo](https://i.imgur.com/3KgqrOY.png)

## Main Feed
Once a user signs up or logs in, they are redirected to the main feed page, where the can view all posts made by users that they follow on the website.  They can also access the navbar to click links that send them to other pages.  The navbar includes a home button, discover button, create a post button, logout button, and a search bar.  If a user did not logout the last time they visited the website, their user persists and will take them to the main feed page automatically.
![GitHub Logo](https://i.imgur.com/oRPmvwU.png)

## Discover Page
By clicking the discover button (compass symbol) in the navbar, the user is sent to the discover page where they can view all posts made on the website.  Most recent posts are shown at the top.
![GitHub Logo](https://i.imgur.com/2rAy84y.png)

## Create a Post Modal
By clicking on the create a post button (plus symbol) in the navbar, the user is sent to the create a post modal.  The user can create a post including a photo and an optional caption comment.
![GitHub Logo](https://i.imgur.com/QAOWvMM.png)

## Single Post Modal
By clicking on any post on the main feed, profile page, or discover page, the user is redirected to the single post modal.  There, the user will be able to view the photo, caption and comments on an enlarged screen.  They will also have the ability to create comments.
![GitHub Logo](https://i.imgur.com/nJZaHEv.png)

## Profile Page
By clicking the profile button (circular image of the logged in user) the user is redirected to their own profile page.  The profile page displays the users profile including photo, username, full name, and all posts made by the user.  Clicking the name of any other user on the website will redirect the logged in user to their profile page.
![GitHub Logo](https://i.imgur.com/fZjvXIC.png)




