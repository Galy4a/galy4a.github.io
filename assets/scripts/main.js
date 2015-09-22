jQuery(document).ready(function() {

	$(".button1").hover(
		function(){			
			var left = $(this).position().left;
			$(".line1").stop(true, true);
			$(".line1").animate({left: left}, 400, "easeOutElastic");
			});

	$(".button2").hover(
		function(){
			$(this).children().stop(true, true);
			$(this).children().animate({width: 150, left: 0, opacity: 1},400, "easeInOutSine");},		
		function(){
			$(this).children().stop(true, true);
			$(this).children().animate({width: 2, left: 74, opacity: 0},400);}			
		);

	$(".button3").hover(
		function(){
			$(this).children().stop(true, true);
			$(this).children().animate({height: 2, top: -1},400);},		
		function(){
			$(this).children().stop(true, true);
			$(this).children().animate({height: 1, top: 0},400);}			
		);

});