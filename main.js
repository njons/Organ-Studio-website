/*---------------------------------------------
INTERACTIONS REGARDLESS OF THE WIDTH OF THE WINDOW:
---------------------------------------------- */
/*---------ON LOAD--------- */
$(document).ready( function () {
  // hides the about text
  $('.intro').hide();
  // hides the contact details text
  $('.details').hide();
  // hides all 'Close' buttons
  $('.close').hide();
  //disable the project section from interaction
  $('.projects .title').addClass('disable');
})

/*---------VIDEO--------- */
// CLICKING VIDEO:
$('.video').on('click', function() {
  // fades out video over 1.5s
  $('.player').fadeOut(1500);
  // fades out sound over 3.5 seconds (lingering effect)
  $('.sound').animate({volume: 0.0}, 3500);
  // hides custom cursor image
  $('.cursor-custom').hide();
});

/*---------SECTION: ABOUT--------- */
// CLICKING HEADING 'ABOUT':
$('.about .title').on('click', function() {
  // shows the text in the about section
  $('.intro').show('slow');
  // adds a border to the bottom of the about section (as per the design)
  $('.about').addClass('border-bottom');
  // shows the Close button
  $('.about .close').show();

  // closes the contacts section (in case it is open):
    // hides the text
    $('.details').hide('slow');
    // hides the Close button
    $('.contact .close').hide();
    // removes the border to the bottom of the  contact section (as per the design)
    $('.contact').removeClass('border-bottom');
});

/*---------NAV INTERACTIONS: CONTACTS--------- */
// CLICKING HEADING 'CONTACTS':
$('.contact .title').on('click', function() {
  // shows the text in the contact section
  $('.details').show('slow');
  // shows the 'Close' button
  $('.contact .close').show();

  // closes the about section (in case it is open):
    // hides the text
    $('.intro').hide('slow');
    // removes a border at the bottom
    $('.about').removeClass('border-bottom');
    // hides the Close button (itself)
    $('.about .close').hide();
});


/*---------------------------------------------
INTERACTIONS DEPENDING ON THE WIDTH OF THE WINDOW:
---------------------------------------------- */
// READING THE WIDTH OF THE WINDOW (on load of the page):
$(document).ready( function () {
  // windowWidth holds the window width
  var windowWidth = $(window).width()
  console.log(windowWidth);

  /*---------------------------------------------
  MOBILE AND TABLET(portrait) INTERACTIONS
  ---------------------------------------------- */
  if (windowWidth < 768) {
    // mutes sound
    $('.sound').prop("volume", 0.0);

    /*---------SECTION: ABOUT--------- */
    // CLICKING HEADING 'ABOUT':
    $('.about .title').on('click', function() {
      // shows the text in the about section
      $('.intro').show('slow');
      // adds a border to the bottom of the about section (as per the design)
      $('.about').addClass('border-bottom');
      // shows the Close button
      $('.about .close').show();

      // closes the contacts section (in case it is open):
        // hides the text
        $('.details').hide('slow');
        // hides the Close button
        $('.contact .close').hide();
        // removes the border to the bottom of the  contact section (as per the design)
        $('.contact').removeClass('border-bottom');

      //activate the project section to be interactive
        $('.projects .title').removeClass('disable');
    });

    // CLICKING BUTTON 'Close' IN THE ABOUT SECTION:
    $('.about .close').on('click', function() {
      // hides the text in the about section
      $('.intro').hide('slow');
      // removes the border at the bottom of the about section (as per the design)
      $('.about').removeClass('border-bottom');
      // hides the 'Close' button (itself)
      $('.close').hide();
      // hides the text in the contact section (in case it is open)
      $('.details').hide('slow');
    });

    /*---------NAV INTERACTIONS: CONTACT--------- */
    // CLICKING HEADING 'CONTACT':
    $('.contact .title').on('click', function() {
      // shows the text in the contact section
      $('.contact .text').show('slow');
      // shows the 'Close' button
      $('.contact .close').show();
      // adds a border to the bottom of the  contact section (as per the design)
      $('.contact').addClass('border-bottom');
    })

    // CLICKING BUTTON 'Close' IN THE CONTACTS SECTION:
    $('.contact .close').on('click', function() {
      // hides the text in the contact section
      $('.details').hide('slow');
      // hides the 'Close' button
      $('.contact .close').hide();
      // removes the border to the bottom of the  contact section (as per the design)
      $('.contact').removeClass('border-bottom');
    })

    /*---------NAV INTERACTIONS: PROJECTS--------- */
    // CLICKING HEADING 'PROJECTS':
    $('.projects .title').on('click', function() {

      // closes the about section (in case it is open):
        // hides the text
        $('.intro').hide('slow');
        // removes a border at the bottom
        $('.about').removeClass('border-bottom');
        // hides the Close button (itself)
        $('.about .close').hide();

      // closes the contact section (in case it is open):
        $('.details').hide('slow');
        // removes the border to the bottom of the about section (as per the design)
        $('.contact').removeClass('border-bottom');
        // hides the Close button
        $('.contact .close').hide();
    })

  /*---------------------------------------------
  DESKTOP AND TABLET (landscape) INTERACTIONS
  ---------------------------------------------- */
  } else {

    /*---------CUSTOM CURSOR--------- */
    // CLICKING VIDEO:
    $('.video').on('click', function() {
      //disable the project section from interaction
      $('.projects .title').addClass('disable');
    })

    /*---------CUSTOM CURSOR--------- */
    // CUSTOM CURSOR (IMAGE FOLLOWING MOUSE):
    $(function () {
      $('.video').mousemove(function (e) {
        $('.cursor-custom').show().css({
          "left": e.clientX,
          "top": e.clientY
        });
      });
    })

    /*---------SECTION: ABOUT--------- */
    // CLICKING HEADING 'ABOUT':
    $('.about .title').on('click', function() {
      // shows the text in the about section
      $('.intro').show('slow');
      // adds a border to the bottom of the about section (as per the design)
      $('.about').addClass('border-bottom');
      // adds 13px of space in the bottom of the about section (as per the design)
      $('.about').addClass('padding-bottom');
      // shows the Close button
      $('.about .close').show();

      // closes the contacts section (in case it is open):
        // hides the text
        $('.details').hide('slow');
        // hides the Close button
        $('.contact .close').hide();
        // removes the border to the bottom of the  contact section (as per the design)
        $('.contact').removeClass('border-bottom');
        // removes 13px of space in the bottom of the about section (as per the design)
        $('.contact').removeClass('padding-bottom');
    });

    // CLICKING BUTTON 'Close' IN THE ABOUT SECTION:
    $('.about .close').on('click', function() {
      // hides the text in the about section
      $('.intro').hide('slow');
      // removes the border at the bottom of the about section (as per the design)
      $('.about').removeClass('border-bottom');
      // removes the 13px of extra space in the bottom of the about section (as per the design)
      $('.about').removeClass('padding-bottom');
      // hides the 'Close' button (itself)
      $('.close').hide();
      // hides the text in the contact section (in case it is open)
      $('.details').hide('slow');
    });

    /*---------NAV INTERACTIONS: CONTACTS--------- */
    // CLICKING HEADING 'CONTACTS':
    $('.contact .title').on('click', function() {
      // shows the text in the contact section
      $('.details').show('slow');
      // shows the 'Close' button
      $('.contact .close').show();

      // closes the about section (in case it is open):
        // hides the text
        $('.intro').hide('slow');
        // removes a border at the bottom
        $('.about').removeClass('border-bottom');
        // removes the 13px of extra space in the bottom of the about section
        $('.about').removeClass('padding-bottom');
        // hides the Close button (itself)
        $('.about .close').hide();
    });

    // CLICKING BUTTON 'Close' IN THE CONTACTS SECTION:
    $('.contact .close').on('click', function() {
      // hides the text in the contact section
      $('.details').hide('slow');
      // hides the 'Close' button
      $('.contact .close').hide();
    })



  }
})
