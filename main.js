
// FUNCTION FOR CLICKING VIDEO:
function moveToSecondScreen() {
  if (!$('body').hasClass('second-screen')) {
    var audioFadeSpeed = 3500;
    var videoFadeSpeed = 1500;

    $('body').addClass('second-screen');

    // fades out video over 1.5s
    $('.player').fadeOut(videoFadeSpeed, function() {
      $(this).find('video').remove();
    });
    // fades out sound over 3.5 seconds (lingering effect)
    $('.sound').animate({volume: 0.0}, audioFadeSpeed);
    // hides custom cursor image
    $('.cursor-custom').hide();
  }
}

/*---------------------------------------------
CUSTOM CURSOR:
----------------------------------------------*/
// CUSTOM CURSOR (IMAGE FOLLOWING MOUSE):
$('.video').mousemove(function (e) {
  $('.cursor-custom').show().css({
    "left": e.clientX,
    "top": e.clientY
  });
})

/*---------------------------------------------
VIDEO:
----------------------------------------------*/

// CLICKING VIDEO:
$('.video').on('click touchstart', function() {
  moveToSecondScreen();
});

// END OF VIDEO:
$('.video').on('loadedmetadata',function(){
  var fadeOutTrigger = parseInt((this.duration-5)*1000);
  console.log(fadeOutTrigger);
  setTimeout(function() {
    moveToSecondScreen();
  }, fadeOutTrigger);
});

/*---------------------------------------------
SOUND:
---------------------------------------------- */
// ON LOAD:
$(document).ready( function () {
  if ($(window).width() > 768) {
    var s = $('.sound')
    s.attr('preload', 'true');
    s.attr('autoplay', 'true');
  }
});


/*---------------------------------------------
OBJECT FIT POLYFILL:
---------------------------------------------- */
// ON LOAD:
$(document).ready( function () {
  objectFitVideos();
});

/*---------------------------------------------
ACCORDION:
----------------------------------------------*/
// WHEN CLICKING A HEADING TITLE
$('.accordion .title').on('click', function() {

  if ($(this).hasClass('expand')) {
    // open the nearby accordion
    var accordion = $(this).closest('.accordion');
    accordion.find('.intro').slideDown();
    accordion.addClass('open');
  } else {
    // dont open any accordions
    var accordion = null;
  }

  // close all other accordions
  // except the one we just opened (if any)
  var otheraccordions = $('.accordion').not(accordion);
  otheraccordions.find('.intro').slideUp();
  otheraccordions.removeClass('open');

})
