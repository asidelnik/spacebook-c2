var SpacebookApp = function () {
  var posts = [
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 1, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 2, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]}
  ];

  // the current id to assign to a post
  var currentId = 0;
  var $posts = $('.posts');

  var _findPostById = function (id) {
    for (var i = 0; i < posts.length; i += 1) {
      if (posts[i].id === id) {
        return posts[i];
      }
    }
  }

  var createPost = function (text) {
    var post = {
      text: text,
      id: currentId,
      comments: []
    }

    currentId += 1;

    posts.push(post);
  }

  var renderPosts = function () {
    $posts.empty(); //

    for (var i = 0; i < posts.length; i += 1) {
      var post = posts[i];

      var commentsContainer = '<div class="comments-container">' +
      '<input type="text" class="comment-name">' +
      '<button class="btn btn-primary add-comment">Comment</button> </div>';

      $posts.append('<div class="post" data-id=' + post.id + '>' +
      commentsContainer + '<a href="#" class="remove">remove</a> ' +
      '<a href="#" class="show-comments">comments</a> ' + post.text +
      '</div>');
    }
  }

  var removePost = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    var id = $clickedPost.data().id;

    var post = _findPostById(id);

    posts.splice(posts.indexOf(post), 1);
    $clickedPost.remove();
  }

  var createComment = function(text, ind) {
    var postComments = {
      text: text,
    }
    posts[ind].comments.push(post);
  }

  var toggleComments = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    $clickedPost.find('.comments-container').toggleClass('show');
  }

  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,

    createComment: createComment,

    // TODO: Implement
    // renderComments: renderComments,

    // TODO: Implement
    // removeComment: removeComment,
    toggleComments: toggleComments
  }
}

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function () {
  var text = $('#post-name').val();

  app.createPost(text);
  app.renderPosts();

  $('input:text').focus(
    function(){
      $(this).val('');
    });
  });

  $("#post-name").keyup(function(event) {
    if (event.keyCode === 13) {
      $(".add-post").click();
    }
  });

  $('.posts').on('click', '.remove', function () {
    app.removePost(this);
  });

  $('.posts').on('click','.show-comments', function () {
    app.toggleComments(this);
  });

  $(".add-comment").on('click', function () {
    var text = $('.comment-name').val();
    var ind = $(this).closest('div').data("id");  // index of the post in the array

    app.createComment(text, ind);
    //app.renderComments();

    $('input:text').focus(
      function(){
        $(this).val('');
      });
    });
