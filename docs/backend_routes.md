

# Backend Routes

## HTML
  * GET /
  Home page page for a logged-in user.

## API  Endpoints

### user
* GET  /api/users/:id
User profile page with stats, albums, and photos
* POST /api/users/
New user form


### albums
* GET /api/albums
Album index page
* GET /api/albums/:id
Album page containing photos linked with corresponding AlbumJoins
* POST /api/albums
Create a new album
* PATCH /api/albums/:id
Edit an album
* DELETE /api/albums/:id
Delete an album

### session
* POST /api/session/
Login Screen with a very nice background
* DELETE /api/session
Logout.

### photos

* GET api/photos/
Index page, called "explore" on real Flickr
* GET api/photos/:id
Show page for a photo containing tags, albums, comments, and user info
* POST api/photos/
Create new photo
* PATCH api/photos/:id
Edit photo information
* DELETE api/photos/:id
Delete the designated photo


### comments - nested under photo
* POST  /photos/:photoId/comments
Add your very own comment to a photo
* DELETE /comments/:id
Get rid of a comment entirely.

### tags - nested under photo
* POST /photos/photoId/tags
Tag a photo
* DELETE /photos/photoId/tags
Remove a tag from a photo
