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
         .then(  (data) => {
             this.posts =  data;
         })

      // return $.get('/posts')
      //    .then(function (data) {
      //       this.posts = data;
      //       console.log(this.posts);
      //       return data;
      //    })
      //    .catch(function (jqXHR, textStatus, errorThrown) {
      //       console.log(errorThrown);
      //    })
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