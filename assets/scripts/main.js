jQuery(document).ready(function() {

	$(".frame").mousemove(function(e){
    var X = e.pageX; // положения по оси X
    var Y = e.pageY; // положения по оси Y
    $(".background").css({"top": 0-Y/50+"px", "left": 0-X/50+"px"});
    $(".mount").css({"top": 0-Y/40+"px", "left": 0-X/40+"px"});
    $(".mounts").css({"top": 0-Y/30+"px", "left": 0-X/30+"px"});
    $(".forest-far").css({"top": 0+Y/30+"px", "left": 0+X/30+"px"});
    $(".forest").css({"top": 0+Y/15+"px", "left": 0+X/15+"px"});
	}); 

});