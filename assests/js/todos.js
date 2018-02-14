// Check off specific todos by clicking
$("li").click(function () {
    $(this).toggleClass("completed")
    //  $(.this).css("text-decoration", "line-through");
    // we can write "text-decoration" when we are making an object
    // we need to make use of camel-case as used above
});