# Phase 2: Viewing Albums and Screenshots

## Rails
### Models

### Controllers
Api::AlbumsController (create, destroy, index, show)
Api::ScreenshotsController (create, destroy, show, update)

### Views
* Screenshots/show.json.jbuilder

## Backbone
### Models
* Albums (parses nested `posts` association)
* Screenshots

### Collections
* Albums
* Screenshots

### Views
* ScreenshotForm
* ScreenshotShow
* AlbumsIndex
* AlbumShow

## Gems/Libraries
