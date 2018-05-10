var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Schemas -----------------------------------
let commentSchema = new mongoose.Schema({
   text: String,
   user: String,
})
let Comment = mongoose.model("comment", commentSchema);

let postSchema = new mongoose.Schema({
   text: String,
   comments: [commentSchema]
});
let Post = mongoose.model("post", postSchema);










// Instances creation -----------------------------------
var comment1_1 = new Comment({
   text: "Comment 1_1",
   user: "John"
});
var comment1_2 = new  Comment({
   text: "Comment 1_2",
   user: "John"
});

var post1 = new Post({
   text: "Post 1",
   comments: [],
});

// 2 -------------
var comment2_1 = new Comment({
   text: "Comment 2_1",
   user: "Owen"
});
var comment2_2 = new Comment({
   text: "Comment 2_2",
   user: "Owen"
});

var post2 = new Post({
   text: "Post 2",
   comments: [],
});




// Instances saving & pushing -----------------------------------
// comment1_1.save();
// comment1_2.save();
// comment2_1.save();
// comment2_2.save();

// post1.comments.push(comment1_1, comment1_2);
// post1.save();

// post2.comments.push(comment2_1, comment2_2);
// post2.save();


// module.exports = Post;