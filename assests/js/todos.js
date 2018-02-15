// Check off specific todos by clicking
$("li").click(function () {
    $(this).toggleClass("completed")
});


// click on X to delete todo
$("span").click(function (event) {
   $(this).parent().fadeOut(500, function () {
       // the above this refers to the span and .parent() makes it
       // work with the parent i.e <li>.
       // the fadeOut() is also working on parent <li> not on span
       // $(this).remove(); is working on parent element not the span.
       $(this).remove();
   });
    event.stopPropagation()
});


//Adding todo to list
$("input[type='text']").keypress(function (event) {
    if (event.which === 13){
        //grabbing new todo text from input
        var todotext = $(this).val();
        //To clear the input text from the input box
        $(this).val("");
        //create a new <li> and add to <ul>
        $("ul").append("<li>"+todotext+"</li >")
    }
});