
/*$('.item').click(function()
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
});
*/


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







/*
$('#owl-cat1').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots: false,
	mouseDrag: false,
	touchDrag: false,
	pullDrag: false,
	lazyLoad:true,
	responsive:{
		0:{
			items:1,
			dots: true
		},
		600:{
			items:3,
			dots: true
		},
		1000:{
			items:3,
			dots: true
		},
		1200:{
			items:4
		}
	}
});

var owl1 = $('#owl-cat1');
owl1.owlCarousel();
// Go to the next item
$('.btnnext-cat1').click(function() {
	owl1.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btnprev-cat1').click(function() {
	owl1.trigger('prev.owl.carousel');
})


$('#owl-cat2').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots: false,
	lazyLoad:true,
	responsive:{
		0:{
			items:1,
			dots: true
		},
		600:{
			items:3,
			dots: true
		},
		1000:{
			items:3,
			dots: true
		},
		1200:{
			items:4
		}
	}
});

var owl2 = $('#owl-cat2');
owl2.owlCarousel();
// Go to the next item
$('.btnnext-cat2').click(function() {
	owl2.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btnprev-cat2').click(function() {
	owl2.trigger('prev.owl.carousel');
})*/


