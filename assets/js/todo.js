//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed"); 
});

// galima arba taip ==========>>>>>
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 	$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// 		} else {
// 			$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through",
// 		});
// 	}
// });
//  <<<<<<<<<=======================


// click on x to delete todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){  // <---- parent(), skirtas tam,kad veiktu visa elementa, o ne tik span.
		$(this).remove();
	});
	event.stopPropagation();    // <------ sustabdo veikima kitiems elementams, siuo atveju veikia tik span, o ne visam li
});


$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// paima ivesta texta is input
		var todoText = $(this).val();
		$(this).val("");  // <<<-----------ivedus texta pradingsta is input eilutes
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});