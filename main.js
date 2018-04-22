let posts = [];
let postNumber = 0;

let newPost = function(userInput) {
    postNumber++;
    let post = {};
    post.text = userInput;
    post.id = postNumber;
    posts.push(post);
    renderArray();
}

let renderArray = function() {
    $('.posts').find("p").remove();
    for (let i = 0; i < posts.length; i++) {
      $('.posts').append($('<p class="post">' + posts[i].text + '</p>').attr('data-id', posts[i].id).append($('<button class="remove btn btn-info" type="button">Remove</button>')));
    }
}

$('.add-post').on('click', function() {
    let userInput = $('#post-name').val();
    newPost(userInput);
    // if(userInput && typeof userInput === "string") {
    //   newPost(userInput);
    // }
})

// $('.posts').on('click', '.remove',function() {
//   $(this)
//     posts.splice(posts.indexOf(this), 1)
// })
