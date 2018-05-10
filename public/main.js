//var dep = require("dep");
import PostsRepository from './posts-repository.js';
import PostsRenderer from './posts-renderer.js';
import EventsHandler from './events-handler.js';

//var Post = require("Post");

let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();


window.onload = function renderOnLoad() {
   // Invoke repository get method, to invoke server get
   let postsObj = postsRepository.getPosts();
   postsRenderer.renderPosts(postsObj);
   //postsRenderer.renderComments(data, postIndex);
}


// I am trying to get the data from the db through the server
// To show it up on my website
/* log every step

   When page loads, 
   1. main begins render db function
   2. repo - get data/posts with ajax call to server
   3. Server - app.get to to get from db

*/