# Instagib
Instagib is an Instagram clone for videogame Screenshots.

##Languages and Technologies
Ruby on Rails
Backbone.js
Pusher
PgSearch
BCrypt
Paperclip
JQuery UI
JBuilder
AWS and S3


[Live link][heroku]

[heroku]: https://instagib.space/

## Current Features
Instagib is an Instagram clone for videogame Screenshots. Users can:

Create accounts
Create sessions (log in)
Create Screenshots
Create albums
View albums and screenshots
Add Their Screenshots to their albums
Comment on Screenshots and other comments
Upload screenshots
Search for users by username
Search for screenshots and Albums by title
Tag screenshots genres and game
Create User avatars
View Feed homepage
Hover Previews

## Technical Specifications
Uses Pusher to automatically update all homefeeds whenever a new screenshot is uploaded
Stores Screenshots in AWS so they are not held in the Repository
Uses Backbone.js to make a seamless one-page app
Overwrites the Backbone.js parse function to make incoming data more easily stored, especially in sorting child comments.

### Features Todo (TBD)
- [ ] "Like" button and counter for screenshots
- [ ] Browse screenshots by tag
- [ ] Pagination/infinite scroll
- [ ] Notifications
- [ ] Multiple sessions/session management
- [ ] Typeahead search bar
- [ ] Friend users
- [ ] Adding Game pages?
- [ ] Omniauth
- [ ] Mail
