var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/spacebookDB', function () {
   console.log("DB connection established!!!");
})

var Post = require('./models/postModel');


var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));


// Server routes to define the API:
// 1) Get all posts and their comments
app.get('/posts', function (req, res) {
   Post.find(function (err, posts) {
      if (err) {
         console.error(err);
         res.sendStatus(500).send(err);
      } else {
         res.send(posts);
      }
   })
})


// 2) Add a new post to DB
app.post('/posts', function (req, res) {
   let post = new Post({
      id: new mongoose.Types.ObjectId(),
      text: req.body.text,
      comments: []
   });
   post.save();
   res.send(post);
});


// 3) to handle deleting a post
app.delete('/posts/:dataId', function (req, res) {
   //console.log("server: " + req.params.dataId);
   Post.findByIdAndRemove(req.params.dataId, function (err, posts) {
      if (err) {
         console.error(err);
         res.sendStatus(500).send(err);
      } else {
         res.send('DELETE request to homepage');
      }
   });
});
//Maybe return () over function in .findByIdAndRemove


// 4) to handle adding a comment to a post



// 5) to handle deleting a comment from a post




app.listen(SERVER_PORT, () => {
   console.log("Server started on port " + SERVER_PORT);
});