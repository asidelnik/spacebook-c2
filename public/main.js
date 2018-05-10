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
   postsRepository.getPosts();
      
}


/*.then(function (data) {
         //this.posts = data;
         console.log(data);
         postsRenderer.renderPosts(data);
         //postsRenderer.renderComments(data, postIndex);
      }).catch(function(err){
         console.log(err);
      }) /*.fail(function (err) { // handle error
         console.error(err);
      })*/

/*
let temp = api.getTemp($cityName)
   .then(function (cityAPI) {
      let cTemp = cityAPI.query.results.channel.item.condition.temp;
      let date = data.getDate();
      let time = data.getTime();


      let city = new City($cityName, cTemp, date, time);

      data.pushToCities(city);
      data.saveToLocalStorage();
      data.cities = data.getFromLocalStorage();

      view.renderCities(data);
      $('#searchInp').val("");

   }).catch(function (err) {
      console.log(err);
   })
*/

//postsRenderer.renderPosts(postsObj);
//postsRenderer.renderComments(data, postIndex);

// I am trying to get the data from the db through the server
// To show it up on my website
/* log every step

   When page loads, 
   1. main begins render db function
   2. repo - get data/posts with ajax call to server
   3. Server - app.get to to get from db

*/