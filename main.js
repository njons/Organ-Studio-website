
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
$('.accordion .heading').on('click', function() {

  // decide which accordion to open
  if ($(this).hasClass('expand')) {
    // open the nearby accordion
    var accordionsToOpen = $(this).closest('.accordion');
    accordionsToOpen.find('.intro').slideDown();
    accordionsToOpen.addClass('open');

    $(this).closest('.heading').removeClass('expand');
    $(this).closest('.heading').addClass('slideUp');

  // closing accordion by clicking the heading again

  } else if ($(this).hasClass('slideUp')) {
    var accordionSecondClick = $(this).closest('.accordion');

    accordionSecondClick.find('.intro').slideUp();
    accordionSecondClick.removeClass('slideUp');

    $(this).closest('.heading').removeClass('slideUp');
    $(this).closest('.heading').addClass('expand');
    accordionSecondClick.removeClass('open');

  } else {
    // dont open any accordions
    var accordionsToOpen = null;
  }

  // close all other accordions
  // except the one we just opened (if any)
  var accordionsToClose = $('.accordion').not(accordionsToOpen, accordionSecondClick);
  accordionsToClose.find('.intro').slideUp();
  accordionsToClose.removeClass('open');
})
