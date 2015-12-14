/*
$('.item').click(function()
{
	$("body").addClass("body-overflow");
	$("#coupon-modal").fadeToggle("slow", function(){
		if ( typeof Maplace == 'function' && $( '#gmap' ) ) {
			new Maplace( gmap_options ).Load();
		};
	});
});


$('.coupon-close').click(function()
{
	
	$("#coupon-modal").fadeToggle("slow");
	$("body").removeClass("body-overflow");
});*/

$('.show-category').click(function()
{
	$(".categorie").slideToggle("slow");
});

//// Owl Carousel ////



var owlcat1 = $("#owl-cat1");

owlcat1.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,3], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
	mouseDrag: true,
	touchdrag: true,
	lazyLoad : true,
});

// Custom Navigation Events
$(".btnnext-cat1").click(function(){
	owlcat1.trigger('owl.next');
})
$(".btnprev-cat1").click(function(){
	owlcat1.trigger('owl.prev');
})

var owlcat2 = $("#owl-cat2");

owlcat2.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,3], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
	mouseDrag: true,
	touchdrag: true,
	lazyLoad : true,
});

// Custom Navigation Events
$(".btnnext-cat2").click(function(){
	owlcat2.trigger('owl.next');
})
$(".btnprev-cat2").click(function(){
	owlcat2.trigger('owl.prev');
})

var owlcat3 = $("#owl-cat3");

owlcat3.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,3], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
	mouseDrag: true,
	touchdrag: true,
	lazyLoad : true,
});

// Custom Navigation Events
$(".btnnext-cat3").click(function(){
	owlcat3.trigger('owl.next');
})
$(".btnprev-cat3").click(function(){
	owlcat3.trigger('owl.prev');
})



var owlcat4 = $("#owl-cat4");

owlcat4.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,3], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
	mouseDrag: true,
	touchdrag: true,
	lazyLoad : true,
});

// Custom Navigation Events
$(".btnnext-cat4").click(function(){
	owlcat4.trigger('owl.next');
})
$(".btnprev-cat4").click(function(){
	owlcat4.trigger('owl.prev');
})

var owlcatbanner = $("#owlcatbanner");

owlcatbanner.owlCarousel({
	items : 1, //10 items above 1000px browser width
	mouseDrag: false,
	touchdrag: false,
	lazyLoad : true,
	navigation: false,
	pagination: false,
	autoPlay: 3000,
});

// Custom Navigation Events
$(".btnnext-catbanner").click(function(){
	owlcatbanner.trigger('owl.next');
})
$(".btnprev-catbanner").click(function(){
	owlcatbanner.trigger('owl.prev');
})

// Scroll to categorie


$(".category-1").click(function() 
{
	$('html, body').animate(
		{scrollTop: $("#category-1").offset().top-20},
		{
			duration: 1000,
			easing: 'easeInOutCubic'
		}
		);
});
$(".category-2").click(function() 
{
	$('html, body').animate(
		{scrollTop: $("#category-2").offset().top-20},
		{
			duration: 1000,
			easing: 'easeInOutCubic'
		}
		);
}); 
$(".category-3").click(function() 
{
	$('html, body').animate(
		{scrollTop: $("#category-3").offset().top-20},
		{
			duration: 1000,
			easing: 'easeInOutCubic'
		}
		);
}); 
$(".category-4").click(function() 
{
	$('html, body').animate(
		{scrollTop: $("#category-4").offset().top-20},
		{
			duration: 1000,
			easing: 'easeInOutCubic'
		}
		);
});

// Back to top button

$(window).scroll(function(){
	if ($(this).scrollTop() > 200) {
		$('.back-to-top').fadeIn();
	} else {
		$('.back-to-top').fadeOut();
	}
});

$(".back-to-top").click(function(){;
	$('html, body').animate(
		{scrollTop:0}, 
		{
			duration: 1000,
			easing: 'easeInOutCubic'
		}
	);
	return false;
});