# Instagib

[Heroku link][heroku]

[heroku]: 

## Minimum Viable Product
Instagib is an Instgram clone for videogame Screenshots. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create Screenshots
- [ ] Create albums
- [ ] View albums and screenshots
- [ ] Friend users
- [ ] Comment on Screenshots and other comments
- [ ] Tag screenshots genres and game
- [ ] Search for users by username
- [ ] Search for screenshots by title


## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./views.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: User Authentication and Create Screenshots(~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create screenshots using
a simple text form in a Rails view and grabbing an image from a url. The most important 
part of this phase will be pushing the app to Heroku and ensuring that everything 
works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Viewing Albums and Screenshots (~1 day)
I will add API routes to serve blog and post data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to navigate through show and index views for screenshots
and albums, all inside a single Backbone app.

[Details][phase-two]

### Phase 3: Commenting (~1 day)
I will add the comment form to the screenshot show page, and have it appear when the
"add comment" button is clicked. The form will post without refreshing the page and add 
the comment to the displayed comments. There will also be a reply button/link that will 
bring up a new comment form for child comments using the adjacency model. By the end of 
the day users will be able to add and view comments and owners will be able to delete their
comment (but not the children).

[Details][phase-three]

### Phase 4: Uploading Screenshots (~1-2 days)
I'll be looking into using paperclip and imagemagick gems to implement a screenshot uploader
so users can upload a screenshot from their own computer. I expect this to take longer than 
most of the other phases.

[Details][phase-four]

### Phase 5: Searching for Users and Screenshots (~2 days)
I'll need to add `search` routes to both the Users and Screenshots controllers. On the
Backbone side, there will be a `SearchResults` composite view has `UsersIndex`
and `ScreenshotsIndex` subviews. These views will use plain old `users` and `Screenshots`
collections, but they will fetch from the new `search` routes.

[Details][phase-five]

### Phase 6: Tagging Screenshots (~1 days)


[Details][phase-six]

### Bonus Features (TBD)
- [ ] "Like" button and counter for screenshots
- [ ] Browse screenshots by tag
- [ ] Pagination/infinite scroll
- [ ] Notifications
- [ ] 
- [ ] 
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

