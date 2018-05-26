/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
   constructor() {
      this.posts = [];
   }

   // Ajax get posts request
   async getPosts() {
      try {
         let dbPosts = await $.get('/posts');
         this.posts = dbPosts;
         return dbPosts;
      } catch (err) {
         alert(err);
      }
   }

   // Ajax post posts request
   async addPost(postText) {

      try {
         let response = await $.post('/posts');
         return response;
         //this.posts.push(response);
      } catch (err) {
         console.log("error")
         alert(err);
      }
      // var post1 = new Post({
         //    text: postText,
         //    comments: [],
         // });
         // post1.save();
  
   }

   // async addPost(postText) {
   //    return $.post('/posts') // How does the server route know its been requested
   //       .then((data) => {
   //          this.posts.push(data);
   //       })
   // }

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