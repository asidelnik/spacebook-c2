// handlebars branch changes
var SpacebookApp = function () {

    var postsData = {
        posts: [],
    };

    // the current id to assign to a post
    var currentId = 0;
    var $posts = $('.posts');
    var postsArr = postsData.posts;

    var _findPostById = function (postDataId) {
        for (var i = 0; i < postsData.posts.length; i += 1) {
            if (postsData.posts[i].postId == postDataId) {
                return postsData.posts[i];
            }
        }
    }
// createPost push to array - y
    var createPost = function (text) {
        var post = {
            postText: text,
            postId: currentId,
        }

        currentId += 1;
        postsData.posts.push(post);
        //console.log(postsData);
    }

// renderPosts renders posts - y
    var renderPosts = function () {
        $posts.empty(); //

        var source = $('#posts-template').html();
        var template = Handlebars.compile(source);
        var newHTML = template(postsData);
        $('.posts').append(newHTML);

        console.log(postsData);
        /* Classes & Old JS Rendering
            #posts-template
            .post
            data-id="postId"
            postText
            .remove

            for (var i = 0; i < posts.length; i += 1) {
                var postId = posts[i].id;
                var postText = posts[i].text;

                var commentsContainer =
                '<div class="show">' + //'<div class="comments-container">'
                    '<input type="text" class="comment-text">' +
                    '<button class="btn btn-primary add-comment">Comment</button>' +
                '</div>';

                $posts.append('<div class="post" data-id=' + postId + '>' + postText +
                '<a href="#" class="show-comments">Comments</a> ' +
                '<a href="#" class="remove">Remove</a> ' +
                commentsContainer +
                '</div>');
            }
        */
    }

    var removePost = function (postDataId) {
        var postObj = _findPostById(postDataId);
        //var indOfPostObj = ;

        postsData.posts.splice(postsData.posts.indexOf(postObj), 1);
        var getPostDiv = '*[data-id = "'+ postDataId + '"]';
        $(getPostDiv).remove();
        //console.log(postsData);
    }


    return {
        createPost: createPost,
        renderPosts: renderPosts,
        removePost: removePost,
    }
}

var app = SpacebookApp();

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
    var $postDataId = $(this).closest('.post').data().id;
    // console.log($postDataId);
    //var $textToRemove = $(this)
    //alert();
    app.removePost($postDataId);
    //$(this).closest('div').remove();
});
