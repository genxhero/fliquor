

# Description

Fliquor is a social  app where users may upload photos to present to other users.  

Photos can be sorted by tag, by album, or all of them at once.  Additionally, any user can leave a comment on a photo to voice their opinion on the composition, the subject, or what ever happens to be on their mind at the time.  Photos and albums may be created, edited, or destroyed, while tags and comments may only be created or destroyed.

[Live Demo](https://fliquor.herokuapp.com)

# Technologies Used

The app is built using Ruby on Rails as a backend API with React on the frontend.  I find the rails API to be a tool that is intuitive and easy to use, while React is both powerful and versatile.  Additionally, images are stored on Amazon's s3 service.

Of the challenges I faced along the way the one that sticks out the most is the styling.   Positioning and wayward padding can some times get in the way if one isn't careful. I overcame this by trial and error, learning how the various elements interacted with each other on the screen through total immersion. For future projects I will use my new knowledge of positioning to great effect:
*   Everything should be wrapped in a div
*   Make container items positioned relative, and your overlays positioned absolute.  
*   Use React's event handlers rather than rely solely on css
*   Do not re-use class names, and keep my stylesheet organized

The communication between the front and back ends could also be rather tricky; whenever I changed a piece of code in one component I often had to change more code elsewhere in order to fix the resulting bugs.  What I found is that one should use the term "payload" in one's reducers, and always make sure to never leave a debugger uncommented.  


# Feature 1: User Auth

When a user first enters the website, they are greeted by a sprawling splash screen with a big, inviting sign up button.

![Splash Screen](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/splash.png)

When one clicks on the link the website reactively displays a signup component by way of an Authroute.  For the signup and login component I chose to go with a clear glass motif to go with the theme of looking through a lens.  

![alt text](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/Screen+Shot+2018-10-19+at+8.32.51+AM.png "Signup Component")


Upon a successful signup or login, one is redirected to the home page where all of the photos are displayed in a cascade of glorious color.

![Home Page](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/Index.png)

If any of the fields turn up invalid, the api sends errors back to the front end where they are displayed in a functional component that only shows up if the state has received at least one error.  It implements this by calling the class's renderErrors method, which returns

![Errors Popup](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/errors.png)

```javascript
renderErrors() {
  if (this.props.errors.session.length > 0) {
    return (
        <div className="err-container">
        <div className="errors-popup" >
              <h1 className="failure">ERROR</h1>
              <ul className="errors">
               {this.props.errors.session.map((error, key) => {
                 return <li className="error">{error}</li>
               })}
```



 While one can click on the Fliquor  logo in order to navigate to the photos index page (/home), there are certain limitations.  When logged out one may not make comments, nor may they upload photos.  Any given photo may only be updated or deleted by its uploader, likewise only the author of any given comment may delete said comment.  

![Comments Section](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/commentary-disabled.png)

When one clicks the logout button, the edit and delete links vanish from the photo show page.  When one is logged in and tries to access the root, one is redirected to the /home route and is unable to view the splash page.

Here are the main AuthRoutes routes from the app.jsx file:
```javascript
...
  <div className="app-main">

    <AuthRoute exact path="/" component={OfflineHeaderContainer} />
    <AuthRoute exact path="/signup" component={OfflineHeaderContainer} />
    <AuthRoute exact path="/login" component={OfflineHeaderContainer} />
    <AuthRoute path="/" component={Splash} />
    <Route exact path="/home" component={Index}/>
...
```

As you can see from the figure below, each component consists of a fixed-position header (with auth buttons) and a main content panel.

```javascript
const Create = () => (
  <div>
    <UploadHeaderContainer />
    <PhotoUploadContainer />
  </div>
);

const Edit = () => (
  <div>
    <UploadHeaderContainer />
    <PhotoEditContainer />
  </div>
);
```



# Feature 2: Album CRUD

### Frontend

When one hits the Albums heading on the home navigation bar, the albums index pane loads. When loaded, the first <li> to load is always the Create New Album button. This button is a link to the Protected route "albums/create"

![Album Index](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/Screen+Shot+2018-10-19+at+10.28.30+AM.png)

The Album creation page is modeled after the real Flickr.  The left hand component is the form, while the right hand component displays all of the photos which belong to the current user.  I implemented this spread with a selector:

```javascript
export const getPhotosByUser = (state, userId) => {
  let result = [];
  for (let id in state.entities.photos) {
    if (state.entities.photos[id].user_id === userId){
      result.push(state.entities.photos[id]);
    }
  }
  return result;
};
```

Which I then called in mapStateToProps:
```javascript
  const currentUser = state.entities.users[state.session.id];
  const allPhotos = requestPhotos();
  const photos = getPhotosByUser(state, currentUser.id);
```

As you can see in the image below, the "save" button defaults to disabled; this is to prevent the creation of an empty album.

![Empty Album](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/albumcreateblank.png)

I accomplished this with the following code:

```javascript
  <input type="submit"
               value="save"
               className={this.state.selected.length === 0 ? "album-save-disabled" : "album-save-enabled"}>
  </input>
```

Upon a click the component checks to see whether an item is selected already,  adjusts the array accordingly, and updates the state thusly:

```javascript
     toggleSelected(event){
     event.preventDefault();
     let id = parseInt(event.currentTarget.id);
     if (this.selected.includes(id) ){
        this.selected.splice(this.selected.indexOf(id), 1 );
      }  else {
        this.selected.push(id);
      }
     this.setState({
        selected: this.selected
      });
   }
```

Once at least one photo has been selected, the button will turn blue.  Additionally, each photo selected will be surrounded in a warm blue border.  A second click will remove the border.

![Album Ready](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/albumcreateready.png)

Behind the scenes, I am changing the class of every list item based on the current state:
```javascript
<li id={photo.id}
     className={this.selected.includes(photo.id) ? "album-creation-thumbnail-selected": "album-creation-thumbnail"}
     onClick={this.toggleSelected}>
```

Upon a successful submission (an album may be untitled, and it may be nondescript) one is directed to the Album Show page.

![](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/albumshow.png)

As you can see, when one is logged in one can see the word "You" in the spot reserved for the creator's name.  Here is the code that made it all possible:

```javascript
<div className="album-owner">By { this.props.currentUser.id === this.props.album.user.id ? "YOU"  this.props.album.user.username }</div>
```

To update an album, one only has to click the pen icon in the top right-hand corner; likewise, if one clicks on the trash can icon to the immediate right of the pen icon the album will be destroyed and the album index page will load.

### Backend

Photos and albums have a many-to-many association through a join table which I named "albumjoins".  An AlbumJoin simply stores two foreign keys: a photo_id, and an album_id.

```ruby
  has_many :albumjoins,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: "AlbumJoin",
  dependent: :destroy,
  inverse_of: :album

  has_many :photos,
  through: :albumjoins,
  source: :photo
```
In the controller, the first problem I ran into was that the json was returning the array of photo ids as a string.  The solution was to use our trusty "split" method to get each individual ID number.  Then I iterated through the newly minted array and created an AlbumJoin for each of them; since the album doesn't have an ID until after it saved, the joins are only created in the event of a successful save.

```ruby
  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    photo_ids = params[:album][:photo_ids].split(',')
    if @album.save
      photo_ids.each do |photo_id|
          aj = AlbumJoin.new(album_id: @album.id, photo_id: photo_id.to_i)
          aj.save
      end
```

Updating was both a challenge and a joy to complete.  I learned a great deal about how to work with join tables and the built-in Rails methods granted me by the associations.

```ruby
```
