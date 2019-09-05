$("ul").on("click" ,"li" ,function(){
 $(this).toggleClass("completed");
});

// click on X to delete todo

$("ul").on("click" , "span" ,function(event){

    $(this).parent().fadeOut(500, function ( ){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ //enter key is pressed or not
    var todoText= $(this).val();
    $(this).val("");
    $("ul").append("<li> <span> <i class='fa fa-trash'> </i> </span>" +todoText+ "</li>");
    }
});


