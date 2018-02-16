/* jQuery dependent smooth scroll script */

// all named anchors that are on the current page are given a click handler
$('.current-page a[href*="#"]').on('click', function(e){

  e.preventDefault();

  $('html,body').animate({

    scrollTop: $(this.hash).offset().top
  }, 750);
});
