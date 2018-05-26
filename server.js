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


// You will need to create 5 server routes to define your API:
// 1) GET route to handle getting all posts and their comments
app.get('/posts', function (req, res) {
   // DB Post collection - find
   Post.find(function (err, posts) {
      if (err) {
         console.error(err);
         res.sendStatus(500).send(err);
      } else {
         res.send(posts);
      }
   })
})

// 2) to handle adding a post


app.post('/posts', function (req, res) {
   //console.log(req.body.text);
   let post1 = new Post({
         text: req.body.text,
         comments: []
      });
   post1.save();
   // res.send(posts);
   // console.log(posts);
});

 // Post.find(function (err, posts) {
   //    if (err) {
   //       console.error(err);
   //       res.sendStatus(500).send(err);
   //    } else {
   //       res.json(req.body);
   //    }
   // })

   // new Post({
   //    text: req.body,
   //    comments: []
   // }).save();

// app.route('/posts')
//    .post((req, res) => {
//       console.log(req.body);
//       let post = new Post({
//          text: req.body,
//          comments: []
//       });
//       post.save();
//       res.status(201).send(post);
//    })

// console.log("req.body ahead:");


// // fs.writeFile('test.txt', JSON.stringify(req.body), function(err) {
// //    if (err) throw err;
// //    else console.log('Data saved to file!');
// //  });

// Post.find(function (req, posts) {
//    if (err) {
//       console.error(err);
//       res.sendStatus(500).send(err);
//    } else {
//       res.send(posts);

//       // var user_name=req.body.user;
//       // var password=req.body.password;
//       // res.end("yes");
//    }
// })

// 3) to handle deleting a post
app.delete('/', function (req, res) {
   res.send('DELETE request to homepage');
});

// 4) to handle adding a comment to a post
// 5) to handle deleting a comment from a post

app.listen(SERVER_PORT, () => {
   console.log("Server started on port " + SERVER_PORT);
});