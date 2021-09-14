$(function() {

  $('#login-show').click( 
     () => {
     $('#login-modal').fadeIn();
  });

  $('#close-modal').click( 
     () => {
     $('#login-modal').fadeOut();
  });

  $('#next-btn').click(
     () => {
        $('#slide:not(:animated)').animate({
        'margin-left' : -1 * $('#slider li').width()
     }, 
     () => {
        $('#slide').append($('#slide li:first-child'));
        $('#slide').css('margin-left', '0');
     });
  });

  $('#prev-btn').click(
     () => {
        $('#slide:not(:animated)').prepend($('#slide li:last-child')).css('margin-left', -1 * $('#slider li').width())
        .animate({
           'margin-left' : 0
        });
     });

});

