var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/spacebookDB', function() {
  console.log("DB connection established!!!");
})

var Post = require('./models/postModel');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





// You will need to create 5 server routes
// These will define your API:
// GET route (/posts) and have it return all the posts (and their comments)
// 1) to handle getting all posts and their comments

//someone made a 'get' request at the 'cats' route, carrying some type of data
app.get('/posts', function(request, response){
   //mongoose stuff - db stuff
      Post.find({}, function(err, postsFromDB){
         console.log(postsFromDB)
         response.send(postsFromDB)
      })
   })

// 2) to handle adding a post




// 3) to handle deleting a post
// 4) to handle adding a comment to a post
// 5) to handle deleting a comment from a post

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
