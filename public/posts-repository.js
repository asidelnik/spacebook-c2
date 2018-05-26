/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
   constructor() {
      this.posts = [];
   }

   // Method to Ajax get all posts in db
   async getPosts() {
      try {
         let dbPosts = await $.get('/posts');
         this.posts = dbPosts;
         return dbPosts;
      } catch (err) {
         alert(err);
      }
   }


   // Method to Ajax add a post to db
   async addPost(postText) {
      try {
         let addedPost = await $.ajax({
            type: "POST",
            url: '/posts',
            data: {
               text: postText,
               comments: []
            }
         });
         this.posts.push(addedPost);
      } catch (err) {
         console.log("error")
         alert(err);
      }
   }



   // removePost(index) {
   //    try {
   //       await $.ajax({
   //          type: "Delete",
   //          url: '/posts',
   //       });
   //       this.posts.splice(index, 1);

   //    } catch (err) {
   //       console.log("error")
   //       alert(err);
   //    }

   // }



   addComment(newComment, postIndex) {
      this.posts[postIndex].comments.push(newComment);
   };



   deleteComment(postIndex, commentIndex) {
      this.posts[postIndex].comments.splice(commentIndex, 1);
   };
}

export default PostsRepository