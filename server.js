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


// You will need to create 5 server routes
// These will define your API:

// 1) to handle getting all posts and their comments
// GET route (/posts) and have it return all the posts (and their comments)
app.get('/posts', function (req, res) {
   // DB Post collection - find
   Post.find(function (err, posts) {
      if (err){
         console.error(err);
         res.sendStatus(500).send(err);
      }else{
         res.send(posts);
      }
   })
})










// 2) to handle adding a post
app.post('/posts', function (req, res) {
   Post.find(function (req, posts) {
      res.send(posts);
   })
})




app.post('/', function (req, res) {
   
 })

// 3) to handle deleting a post
app.delete('/', function (req, res) {
   res.send('DELETE request to homepage');
 });

// 4) to handle adding a comment to a post
// 5) to handle deleting a comment from a post

app.listen(SERVER_PORT, () => {
   console.log("Server started on port " + SERVER_PORT);
});