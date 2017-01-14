$(function(){

/////////// LEFT ABS MENU /////////////////
var leftAbsNav = $('.left-abs-nav'),
		menutoggle = leftAbsNav.find('.menu-toggle-wrapper'),
		menuContainer = leftAbsNav.find('.menu-container');

		menutoggle.on('click', function(){
		 menuContainer.css( 'transform', 'translateX(0%)');
		 menutoggle.text('Close');
		});



/////////// END OF LEFT ABS MENU /////////////////

///////////// SLIDER ////////////
var revapi;

				jQuery(document).ready(function() {

					   revapi = jQuery('.tp-banner').revolution(
						{
							delay:15000,
							startwidth:1170,
							startheight:500,
							hideThumbs:10,
							navigationStyle: "preview4",
							fullWidth:"off",
							fullScreen:"on",
							hideTimerBar:"on",
							fullScreenOffsetContainer: ""


						});

				});

///////////// END OF SLIDER ////////////


///////////// ISOTOPE //////////////////
$('.gallery-grid').isotope({
  itemSelector: '.gallery-grid-item',
	//stamp: '.stamped',
  masonry: {
    columnWidth: 4
  }
});
///////////// END OF ISOTOPE //////////////////


$('.instagram-wrapper').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});



//////////////FULL-WIDTH MENU //////////////
var fullWidthNav = $('.full-nav'),
		// Menu Wrapper
		menuToggleWrapper = fullWidthNav.find('.menu-toggle-wrapper'),
		menuOpen = menuToggleWrapper.find('span.open'),
		menuClose = menuToggleWrapper.find('.cross'),
		// left-half menu
		navWrapper = fullWidthNav.find('.nav-wrapper'),
		animationContainerNav1 = navWrapper.find('.container-animation-1');
		animationContainerNav2 = navWrapper.find('.container-animation-2');
		// right-half menu
		logoWrapper= fullWidthNav.find('.logo-wrapper'),
		animationContainerLogo1 = logoWrapper.find('.container-animation-1');
		animationContainerLogo2 = logoWrapper.find('.container-animation-2');

		menuToggleWrapper.on('click', function(){
			menuOpen.text(' Close');
			//// Navigation Animation //
			navWrapper.toggleClass('nav-wrapper-animated');
			animationContainerNav1.toggleClass('container-animation-1-animated');
			animationContainerNav2.toggleClass('container-animation-2-animated');
			//// Logo Animation //
			logoWrapper.toggleClass('logo-wrapper-animated');
			animationContainerLogo1.toggleClass('container-animation-1-animated');
			animationContainerLogo2.toggleClass('container-animation-2-animated');
			/// Change Menu to Close //
		});
//////////////FULL-WIDTH MENU //////////////


//$('.burger-icon').on('click', function(){
	//$('.nav-list').toggleClass('is-open');
	//$('.burger-icon .bar-icon').toggleClass('is--open');
//});

});
