$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});

$("input").keypress(function(event){
    if(event.which === 13 && !($(this).val() === "")){
        var todo = $(this).val();
        $("ul").append("<li > <span><i class='fa fa-trash'></i></span>" + todo + "</li>");
        $(this).val("");
    }
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("selected");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation()
});