
/*---------VIDEO--------- */
// CLICKING VIDEO:
$('.video').on('click touchstart', function() {
  moveToSecondScreen();
});


$('.accordeon .title').on('click', function() {

  if ($(this).hasClass('expand')) {
    // open the nearby accordion
    var accordeon = $(this).closest('.accordeon');
    accordeon.find('.intro').slideDown();
    accordeon.addClass('open');
  } else {
    // dont open any accordions
    var accordeon = null;
  }

  // close all other accordeons
  // except the one we just opened (if any)
  var otherAccordeons = $('.accordeon').not(accordeon);
  otherAccordeons.find('.intro').slideUp();
  otherAccordeons.removeClass('open');

})


/*---------------------------------------------
INTERACTIONS DEPENDING ON THE WIDTH OF THE WINDOW:
---------------------------------------------- */
// READING THE WIDTH OF THE WINDOW ON LOAD:
$(document).ready( function () {
  if ($(window).width() > 768) {
    var s = $('.sound')
    s.attr('preload', 'true');
    s.attr('autoplay', 'true');
  }
})

/*---------CUSTOM CURSOR--------- */
// CUSTOM CURSOR (IMAGE FOLLOWING MOUSE):
$('.video').mousemove(function (e) {
  $('.cursor-custom').show().css({
    "left": e.clientX,
    "top": e.clientY
  });
})


function moveToSecondScreen() {
  // fades out video over 1.5s
  $('.player').fadeOut(1500, function() {
    $(this).find('video').remove();
  });
  // fades out sound over 3.5 seconds (lingering effect)
  $('.sound').animate({volume: 0.0}, 3500);
  // hides custom cursor image
  $('.cursor-custom').hide();
}


// /*---------ON LOAD--------- */
$(document).ready( function () {
  // moveToSecondScreen();
})
