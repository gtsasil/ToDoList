//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//creating the event when the user hits the ENTER 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText= $(this).val();
		$(this).val("");//clean the text area after add new event
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}else{}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});