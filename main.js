var SpacebookApp = function () {
    var posts = [];
    // the current id to assign to a post
    var currentId = 0;
    var $posts = $('.posts');

    var _findPostById = function (id) {
        for (var i = 0; i < posts.length; i += 1) {
            if (posts[i].id == id) {
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
            var postId = posts[i].id;
            var postText = posts[i].text;

            var commentsContainer = '<div class="comments-container">' +
            '<input type="text" class="comment-name">' +
            '<button class="btn btn-primary add-comment">Comment</button> </div>';

            $posts.append('<div class="post" data-id=' + postId + '>' + postText +
            '<a href="#" class="show-comments">Comments</a> ' +
            '<a href="#" class="remove">Remove</a> ' +
            commentsContainer +
            '</div>');
        }
        //console.log(posts);
    }

    var removePost = function (postDataId) {
        //_findPostById(postDataId); //returns the object in the array
        for (var i = 0; i < posts.length; i++) {
            if (postDataId == posts[i].id) {
                posts.splice(i, 1);
                $('*[data-id = "'+ postDataId + '"]').remove();
            }
        }
        //console.log(posts);
    }
/*
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
*/
    return {
        createPost: createPost,
        renderPosts: renderPosts,
        removePost: removePost,
        /*
        createComment: createComment,

        // TODO: Implement
        // renderComments: renderComments,

        // TODO: Implement
        // removeComment: removeComment,
        toggleComments: toggleComments
        */
    }
}


var app = SpacebookApp();

// immediately invoke the render method
//app.renderPosts();


// Events --------------------
// Create & Render post
$('.add-post').on('click', function () {
    var $text = $('#input-text').val();

    app.createPost($text);
    app.renderPosts();

    $('#input-text').val('');
});

// Remove post
$('.posts').on('click', '.remove', function () {
    var $postDataId = $(this).closest('div').attr("data-id"); // data().id();
    app.removePost($postDataId);
    //$(this).closest('div').remove();
});

/*
// Show comments
$('.posts').on('click','.show-comments', function () {
    app.toggleComments(this);
});

// Add & Render comment
$(".add-comment").on('click', function () {
    var $text = $('.comment-name').val();
    var ind = $(this).closest('div').data("id");  // index of the post in the array

    app.createComment($text, ind);
    //app.renderComments();
});

// Remove comment
*/
