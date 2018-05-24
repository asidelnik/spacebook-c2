/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
   constructor() {
      this.posts = [];
   }

   // Ajax get posts request
   async getPosts() {
      //console.log('hey');
      let response = await $.get('/posts');
      this.posts = response;
      return response;
      throw new Error(response.status);
   }

   /* getPosts with .then & .catch
   getPosts() {
      //console.log('hey');
      return $.get('/posts')
         .then((data) => {
            this.posts = data;
         })
         .catch(err => alert(err));
   }
   */

   // Ajax post posts request
   addPost(postText) {
      return $.post('/posts') // How does the server route know its been requested
         .then((data) => {
            this.posts.push(data);
         })

      // this.posts.push({
      //    text: postText,
      //    comments: []
      // });


      // $.post( "/posts", function( data ) {
      //    $( ".result" ).html( data );
      //  });
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