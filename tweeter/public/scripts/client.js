/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
                  

const renderTweets = function(tweets) {
  for( let el of tweets){
    const tweets = createTweetElement(el)
    $('#tweets-container').append(tweets);
  }
}

const createTweetElement = function(tweet) {
  let $tweet = $(`<article class="tweet">
  <header>
    <div>
      <img src=${tweet.user.avatars} alt="avatar" />
    <h5>${tweet.user.name}</h5>
    </div>
    <div>
      <h6>${tweet.user.handle}</h6>
    </div>
    
  </header>
    <p>${tweet.content.text}</p>
  <footer>
    <h5>${timeago.format(tweet.created_at)}</h5>
    <div>
      <span><i class="fas fa-flag"></i></span>
      <span><i class="fas fa-retweet"></i></span>
      <span><i class="fas fa-heart"></i></span>
    </div>
  </footer>
</article>`)
  // ...
  return $tweet;
}

const error = $("#errorMessage");

const success = ()=>{
    $.ajax({
        type: "GET",
        url: '/tweets',
        success: function(res){
            console.log(res)
            const data = res.sort((a,b)=> b.created_at - a.created_at)
            renderTweets(data);
        }
      })
}

function handler(event){
    event.preventDefault()
    const data = $(this).serialize();
    const tweet = $.trim($('#tweet-text').val());

    // Check for validation
    if (tweet  === ''|| tweet === null) {
        error.show()
        error.css('color', 'salmon')
      return error.text('Field cannot be empty')
    }
    if (tweet.length > 140){
        error.show()
        error.css('color', 'salmon')
      return error.text('maximum length of 140 exceeded')
    }else{
        error.hide()
    }

    $.ajax({
        type: "POST",
        url: '/tweets',
        data: data,
        success: success
      });
}

success()
const form = $('form')
form.submit(handler)