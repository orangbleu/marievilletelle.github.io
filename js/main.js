/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 



(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*
	Choose video based on screen width (portrait vs landscape)
	*/
	var w = window.matchMedia("(max-width: 700px)");
  	var vid = document.getElementById("introvid");
  	var source = document.createElement("source");
  	source.id = "hvid";
  	source.setAttribute("type", "video/mp4");
  	vid.appendChild(source);
  	
  	if (w.matches) {
  		vid.pause();
    	source.removeAttribute("src");
		source.setAttribute("src", "intro_portrait_short.mp4");
    	vid.load();
    	vid.play();
  } else {
		vid.pause();
		source.removeAttribute("src");
		source.setAttribute("src", "intro_landscape_short.mp4");
		vid.load();
		vid.play();
  }
	
	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	if (w.matches) {
	$('.owl-carousel').owlCarousel(
		{
			items: 1,
			itemsDesktop: [1199,1],
			itemsDesktopSmall: [900, 1],
			itemsTablet: [768,1],
			autoPlay: 3000
  		}
		);
	}
	else {
	$('.owl-carousel').owlCarousel(
		{
			items:1,
			itemsDesktop: [1199,1],
			itemsDesktopSmall: [900, 1],
			itemsTablet: [768,1],
    		autoPlay: true,
    		mouseDrag: false,
    		navigation: true,
			navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
  		}
		);
	}



	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


// 	/*----------------------------------------------------- */
// 	/* Stat Counter
//   	------------------------------------------------------- */
//    var statSection = $("#stats"),
//        stats = $(".stat-count");

//    statSection.waypoint({

//    	handler: function(direction) {

//       	if (direction === "down") {       		

// 			   stats.each(function () {
// 				   var $this = $(this);

// 				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
// 				   	duration: 4000,
// 				   	easing: 'swing',
// 				   	step: function (curValue) {
// 				      	$this.text(Math.ceil(curValue));
// 				    	}
// 				  	});
// 				});

//        	} 

//        	// trigger once only
//        	this.destroy();      	

// 		},
			
// 		offset: "90%"
	
// 	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerBricks = $('.masonry');

	containerBricks.imagesLoaded(function () {
		containerBricks.masonry({
			itemSelector: '.masonry__brick',
			resize: true
		});
	});


    /* slick slider
     * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        
        $('.testimonials__slider').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: "<div class=\'slick-prev\'><i class=\'im im-arrow-left\' aria-hidden=\'true\'></i></div>",
            nextArrow: "<div class=\'slick-next\'><i class=\'im im-arrow-right\' aria-hidden=\'true\'></i></div>",       
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

    };
	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-folio a').magnificPopup({

      type:'inline',
      fixedContentPos: true,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
	   e.preventDefault();
	   $.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */
   	var toggleButton = $('.mobile-menu-button'),
	   nav = $('.header-nav-wrap');
	
   // toggle button
   toggleButton.on('click', function(e) {
		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

	// close button
	var untoggleButton = $('.mobile-close-button');
	untoggleButton.on('click', function(e) {
		untoggleButton.toggleClass('is-clicked');
		nav.fadeOut();
	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  
  

 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});


})(jQuery);