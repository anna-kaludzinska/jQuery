$(function(){
	
	var tekstParPierwszego = $ ("#paragraf").text();
	console.log(tekstParPierwszego);
	
	$(".paragraf").text(tekstParPierwszego);
	
	
	$(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br> html.");
	
	$(".paragrafnext").append("Treść na końcu selektora");
	
	$(".paragrafnext").after("Treść za selektorem");
	
	$("strong").remove();
	
	$(".paragraf").empty();
	
	$(".paragrafnext").css({"font-size": "3em", "color": "red"});
	
	$("h1").addClass("blue");
	
});