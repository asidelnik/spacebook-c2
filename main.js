let posts = [];
let postNumber = 0;

let newPost = function(userInput, postNumber) {
    let post = {};
    post.text = userInput;
    post.id = postNumber;
    posts.push(post);
    renderArray();
}

let renderArray = function() {
    $('.posts').find("p").remove();
    for (let i = 0; i < posts.length; i++) {
      $('.posts').append('<p class="post" data-id="' + i + '">' + posts[i].text + '</p>');
      $('.posts p[data-id="' + i + '"]').append('<button class="remove btn btn-info" type="button">Remove</button>');
    }
    console.log(posts);
}

$('.add-post').on('click', function() {
    let userInput = $('#post-name').val();
    newPost(userInput, postNumber);
    postNumber++;
})

$('input:text').focus(
    function(){
        $(this).val('');
    });

$('.posts').on('click', '.remove',function() {
    var indexToRemove = $(this).closest('p').attr("data-id");  //get object's index in the array
    posts.splice(indexToRemove, 1);
    renderArray();
})
