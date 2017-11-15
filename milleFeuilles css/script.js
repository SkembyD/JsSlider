$(document).ready(function() {
  $('.slider-container').addClass('slowShow');
  setTimeout(function() {
    $('.slider-container').removeClass('no-visibility');
  }, 500);
  var img = $('.slider-container img');
  var count = 0;
  img.eq(count).removeClass('hidden');
  $('button[data-action="left"], button[data-action="right"]').on('click', function() {
    var direction = $(this).data('action');
    if(direction == 'right') {
      if(img.eq(count + 1).length != 0) {
        img.eq(count).addClass('hide');
        //img.eq(count).addClass('hidden');
        img.eq(count + 1).removeClass('hide');
        img.eq(count + 1).addClass('show');
        count ++;
      } else {
        img.eq(count).addClass('hide');
        count = 0;
        img.eq(count).removeClass('hide');
        img.eq(count).addClass('show');
      }
    } else {
      if(count - 1 < 0) {
        img.eq(count).addClass('hide');
        count = img.length - 1;
        img.eq(count).removeClass('hide');
        img.eq(count).addClass('show');
        // Si il existe une image qui suit
      } else {
        img.eq(count).addClass('hide');
        img.eq(count - 1).removeClass('hide');
        img.eq(count).addClass('show');
        count --;
      }
      console.log('A gauche');
    }
  })
})
