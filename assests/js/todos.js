$("ul").on("click", "li", function () {
    //Use of ToggleClass for efficient Code.
    if ($(this).css("color") === "rgb(255, 0, 0)") {
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    else {
        $(this).css({
            color: "red",
            textDecoration: "line-through"
        });
    }

});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function (event) {
    //alert("CONNECTED");
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X </span>" + todoText + "</li>");
    }
});