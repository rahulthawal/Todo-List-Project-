$("li").click(function(){
    //Use of ToggleClass for efficient Code.
    console.log($(this).css("color"));
    if($(this).css("color") === "rgb(255, 0, 0)"){
        $(this).css({
            color:"black",
            textDecoration:"none"
        });
    }
    else{
        $(this).css({
            color: "red",
            textDecoration: "line-through"
        });
    }
    
});

$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})