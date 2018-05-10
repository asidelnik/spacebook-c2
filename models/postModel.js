var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/spacebookDB'); //In server.js
var Schema = mongoose.Schema;


//design the two schema below and use sub docs 
//to define the relationship between posts and comments

let commentSchema = new mongoose.Schema({
   text: String,
   user: String,
})
let Comment = mongoose.model("comment", commentSchema);


let postSchema = new mongoose.Schema({
   text: String,
   comments: [commentSchema]  //[{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
let Post = mongoose.model("post", postSchema);









module.exports = Post