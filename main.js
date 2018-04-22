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
    console.log(posts);
}

$('.add-post').on('click', function() {
    let userInput = $('#post-name').val();
    newPost(userInput);
})

$('.posts').on('click', '.remove',function() {
    $(this).closest("p").remove();
    posts.splice($(this).closest('p').data('id') - 1, 1);
    console.log(posts);
})


/*
// $(this)
  if(userInput && typeof userInput === "string") {
    newPost(userInput);
  }
*/
