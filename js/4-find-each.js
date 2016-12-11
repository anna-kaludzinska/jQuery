$(function(){
	
	$("body").find("p").eq(0).css("color", "green");
	
	/*$("p").each(function() {
		console.log(this);
	});*/
	
	$("p").each(function(index) {
		$(this).addClass("paragraf-" + index);
	});
	
});