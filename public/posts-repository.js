/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
   constructor() {
      this.posts = [];
   }

   getPosts() {
      $.ajax({
            method: "GET",
            url: "/posts"
         })
         .then(function (data) {
            this.posts = data;
            console.log(data);
            //postsRenderer.renderPosts(data);
            //postsRenderer.renderComments(data, postIndex);
         })
         .catch(function (err) { // handle error
            console.error(err);
         })
   }

   addPost(postText) {
      this.posts.push({
         text: postText,
         comments: []
      });
   }

   removePost(index) {
      this.posts.splice(index, 1);
   }

   addComment(newComment, postIndex) {
      this.posts[postIndex].comments.push(newComment);
   };

   deleteComment(postIndex, commentIndex) {
      this.posts[postIndex].comments.splice(commentIndex, 1);
   };
}

export default PostsRepository