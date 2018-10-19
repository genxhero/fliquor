

Description

Fliquor is a social  app where users may upload photos to present to other users.  Photos can be sorted by tag, by album, or all of them at once.  Additionally, any user can leave a comment on a photo to voice their opinion on the composition, the subject, or what ever happens to be on their mind at the time.

<link here>

Technologies Used

The app is built using Ruby on Rails as a backend API with React on the frontend.  Additionally, images are stored on Amazon's s3 service.

Feature 1: User Auth

When a user first enters the website, they are greeted by a sprawling splash screen with a big, inviting sign up button.

SPLASH SCREEN IMAGE

When one clicks on the link the website reactively displays a signup component by way of an Authroute.  For the signup and login component I chose to go with a clear glass motif to go with the theme of looking through a lens.  

![alt text](https://s3-us-west-1.amazonaws.com/fliquor-pro/readme/Screen+Shot+2018-10-19+at+8.32.51+AM.png, "Logo Title Text 1")


 While one can click on the Fliquor  logo in order to navigate to the photos index page (/home), there are certain limitations.  When logged out one may not make comments, nor may they upload photos.  Any given photo may only be updated or deleted by its uploader, likewise only the author of any given comment may delete said comment.  When one clicks the logout button, the edit and delete links vanish from the photo show page.  When one is logged in, one is redirected to the /home route and is unable to view the splash page.

 BEFORE
 AFTER

Feature 2: Photo CRUD

```javascript
```

```ruby
```
