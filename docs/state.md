```js
{
  entities: {
    users: {
      1: {
          id: 1
          username: "FierySwagger",
          email: "GloriousFire@gmail.com",
          firstName: "Duke",
          lastName: "Flame",
          passwordDIgest: "A randomly generated salty hash",
          sessionToken: "A bunch of ballyhoo"
        }
      2: {
          id: 2
          username: "masterslayer",
          email: "msdiscord@gmail.com",
          firstName: "Richter",
          lastName: "Kriegenspiel",
          passwordDIgest: "A string of nonsense",
          sessionToken: "indecipherable 64 bit bupkis"
        }
      }
    photos: {
      1: {
        id: 1,
        userId: 1,
        title: "Glorious Swagger",
        description: "A painting of a corvette surrounded by fire, with a shirtless guitar player resting on the hood",
      }

      2: {
        id: 2,
        userId: 2,
        title: "Land of a Thousand Swords",
        description: "A tableau of bladed weapons- almost as metal as my last album"
        url: "somewhere on active storage"
      }
    }

    albums: {
      1:  {
        id: 1,
        title: "Into the Fire",
        userID: 1,
      }
    }

    tags: {

      1: {
        id: 1,
        title: "burning"
      }
      2: {
        id: 2,
        title: "epic"
      }
      3: {
        id: 3,
        title: "metal"
      }
    }

    comments: {
      1: {
        id: 1,
        userId: 1,
        photoId: 2,
        body:  "Not enough fire, man!!!!!"
      }
      2: {
        id: 1,
        userId: 2,
        photoId: 1,
        body:  "First"
      }
    }

    albumJoins: {
      1: {
        id: 1,
        albumId: 1,
        photoId: 1
      }
    }

    tagJoins: {
      1: {
        id: 1,
        tagId: 1,
        photoId: 1
      }
      2: {
        id: 2,
        tagId: 2,
        photoId: 1
      }
    }

  }


}

```
