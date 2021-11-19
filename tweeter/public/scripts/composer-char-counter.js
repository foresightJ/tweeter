$(document).ready(function() {
    // --- our code goes here ---
    // console.log('hello')
    const counter = $('.counter')
    const counterValue = parseInt($('.counter').val())
    
      $('.userTweet').keyup(function () {
        const tweetLength = $(this).val().length;
        const remainingLength = counterValue - tweetLength;
        counter.text(remainingLength)
        if(remainingLength < 0){
            counter.css("color", "red")
            error.show()
            error.css('color', 'salmon')
            error.text('maximum length of 140 exceeded')
        }else{
            counter.css("color", '#4056a1')
            error.hide()
        }
       
      });
  });
