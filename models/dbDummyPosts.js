/* My spacebookDB starting
{
   "_id": ObjectId("5b06d54d16e5874420a01e3f"),
   "text": "Post 1",
   "comments": [{
      "_id": ObjectId("5b06d54d16e5874420a01e3d"),
      "user": "John",
      "text": "Comment 1_1"
   }, {
      "_id": ObjectId("5b06d54d16e5874420a01e3e"),
      "user": "John",
      "text": "Comment 1_2"
   }],
   "__v": 0
}

{
   "_id": ObjectId("5b06d54d16e5874420a01e42"),
   "text": "Post 2",
   "comments": [{
      "_id": ObjectId("5b06d54d16e5874420a01e40"),
      "user": "Owen",
      "text": "Comment 2_1"
   }, {
      "_id": ObjectId("5b06d54d16e5874420a01e41"),
      "user": "Owen",
      "text": "Comment 2_2"
   }],
   "__v": 0
}
*/


// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var Post = require('./models/postModel');

// Instances creation -----------------------------------
// 1 -------------
// var comment1_1 = new Comment({
//    text: "Comment 1_1",
//    user: "John",
// });
// var comment1_2 = new Comment({
//    text: "Comment 1_2",
//    user: "John",
// });

// var post1 = new Post.Post({
//    text: "Post 1",
//    comments: [comment1_1, comment1_2],
// });

// // 2 -------------
// var comment2_1 = new Comment({
//    text: "Comment 2_1",
//    user: "Owen",
// });
// var comment2_2 = new Comment({
//    text: "Comment 2_2",
//    user: "Owen",
// });

// var post2 = new Post.Post({
//    text: "Post 2",
//    comments: [comment2_1, comment2_2],
// });




// // Instances saving & pushing -----------------------------------
// comment1_1.save();
// comment1_1.save();
// comment1_1.save();
// comment1_1.save();

// post1.comments.push(comment1_1, comment1_2);
// post1.save();

// post2.comments.push(comment2_1, comment2_2);
// post2.save();