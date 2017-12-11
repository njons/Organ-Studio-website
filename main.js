
// FUNCTION FOR CLICKING VIDEO:
function moveToSecondScreen() {
  if (!$('body').hasClass('second-screen')) {
    var audioFadeSpeed = 3500;
    var videoFadeSpeed = 1500;

    // fades out video over 1.5s
    $('.player').fadeOut(videoFadeSpeed, function() {
      $(this).find('video').remove();
      $('body').addClass('second-screen');
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
  if ($(window).width() > 768) {
    var fadeOutTrigger = parseInt((this.duration-5)*1000);
    setTimeout(function() {
      moveToSecondScreen();
    }, fadeOutTrigger);
  }
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
$('.heading').on('click', function() {

  // find the accordion section was clicked
  var accordion = $(this).closest('.accordion');

  // check if the clicked accordion section was open or closed
  if (accordion.hasClass('open')) {
    // the accordion section is open, so we will close it

    // collapse the panel section:
    accordion.find('.panel').slideUp();

    // and register it status as closed
    // for our future reference,
    // and so the css is right
    accordion.removeClass('open');
 } else {
   // the accordion section is closed, so we will open it

   // expand the panel section
   accordion.find('.panel').slideDown();

   // and register it status as open
   accordion.addClass('open');
  }
});
