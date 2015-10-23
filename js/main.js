var amountScrolled = 300;

$(document).ready(function () {
	$(window).scroll(function() {
	    if ( $(window).scrollTop() > amountScrolled ) {
	        $('a.back-to-top').fadeIn('slow');
	    } else {
	        $('a.back-to-top').fadeOut('slow');
	    }
	});

	$('a.back-to-top').click(function () {
	    $("html, body").animate({
	        scrollTop: 0
	    }, 600);
	    return false;
	 });

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
});


