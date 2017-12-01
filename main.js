/*---------------------------------------------
VIDEO INTERACTIONS
---------------------------------------------- */
// CLICKING VIDEO:
$('.video').on('click', function() {
  // fades out video over 1s
  $('.video').fadeOut(1000);
  // fades out sound over 5s to create a ligering effect
  $('.sound').fadeOut(5000);
  // hides all text
  $('.text').hide();
  // hides all 'Close' buttons
  $('.close').hide();
})

/*---------------------------------------------
NAV INTERACTIONS: ABOUT
---------------------------------------------- */
// CLICKING HEADING 'ABOUT':
$('.about .title').on('click', function() {
  // shows the text in the about section
  $('.about .text').show('slow');
  // adds a border to the bottom of the about section (as per the design)
  $('.about').addClass('border-bottom');
  // adds 13px of space in the bottom of the about section (as per the design)
  $('.about').addClass('padding-bottom');
  // shows the Close button
  $('.about .close').show();

  // closes the contacts section (in case it is open):
  // hides the text
  $('.contact .text').hide('slow');
  // hides the Close button
  $('.contact .close').hide();
})

// CLICKING BUTTON 'Close' IN THE ABOUT SECTION:
$('.about .close').on('click', function() {
  // hides the text in the about section
  $('.about .text').hide('slow');
  // removes the border at the bottom of the about section (as per the design)
  $('.about').removeClass('border-bottom');
  // removes the 13px of extra space in the bottom of the about section (as per the design)
  $('.about').removeClass('padding-bottom');
  // hides the Close button (itself)
  $('.close').hide();
  // hides the text in the contact section (in case it is open)
  $('.contact .text').hide('slow');
})


/*---------------------------------------------
NAV INTERACTIONS: CONTACTS
---------------------------------------------- */
// CLICKING HEADING 'CONTACTS':
$('.contact .title').on('click', function() {
  // shows the text in the contact section
  $('.contact .text').show('slow');
  // hides itself
  $('.contact .close').show();

  // closes the about section (in case it is open):
  // hides the text
  $('.about .text').hide('slow');
  // removes a border at the bottom
  $('.about').removeClass('border-bottom');
  // removes the 13px of extra space in the bottom of the about section
  $('.about').removeClass('padding-bottom');
  // hides the Close button (itself)
  $('.about .close').hide();
})

// CLICKING BUTTON 'Close' IN THE CONTACTS SECTION:
$('.contact .close').on('click', function() {
  // hides the text in the contact section
  $('.contact .text').hide('slow');
  // hides the Close button
  $('.contact .close').hide();

})
