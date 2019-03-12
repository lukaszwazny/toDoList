function addListener(li, span){
	$(li).on("click", function(){
		$(this).toggleClass("liClicked");
	});

	$(span).on("click", function(event){
		event.stopPropagation();
		$(this).parent().fadeOut(600, function(){
			$(this).remove();
		});
	});
}

addListener("li", "span");

$("input").on("keypress", function(event){
	if(event.which == 13){
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>" + $(this).val() + "</li>");
		addListener("li:last-child", "li:last-child > span");
		$(this).val("");
	}
});

$("i").on("click", function(){
	$("input").slideToggle(300);
});



