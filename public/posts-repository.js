/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
   constructor() {
      this.posts = [];
   }

   getPosts() {
      //console.log('hey');
      return $.get('/posts')
         .then((data) => {
            this.posts = data;
         })
         .catch(() => {
            this.posts = data;
         })
         .catch( function() {
            alert( "$.get failed!" );
          } );
   }





   

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