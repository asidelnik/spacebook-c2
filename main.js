let posts = [];
let postNumber = 0;

let newPost = function(userInput) {
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
    postNumber++;
}

$('.add-post').on('click', function() {
    let userInput = $('#post-name').val();
    newPost(userInput);
})

$('.posts').on('click', '.remove',function() {
    var parIndexToRemove = $(this).closest('p');
    posts.splice(parIndexToRemove, 1);            // remove object from array
    $(this).closest("p").remove();                // remove p from div

    for (var i = 0; i < posts.length; i++) {
        posts[i].id = i;                          // change object id of index to index  / 0 to 0...
        $('.posts p').eq(i).attr('data-id', i);        // change p data-id attribute to index
    }
    console.log(posts);
})


/*

// $('.posts p:eq(i)').data('id', i);
// $('.posts').find('p').data('id', i);
//.css("background-color", "yellow")
// get first p with index 0 of loop and next ones
// change their data-id attribute
// attr('data-id', posts[i].id);
 //.data('id');
// $(this)
  if(userInput && typeof userInput === "string") {
    newPost(userInput);
  }
*/
