// Check off specific todos by clicking
$("ul").on("click", "li" ,function () {
    $(this).toggleClass("completed")
});


// click on X to delete todo
$("ul").on("click", "span" ,function (event) {
   $(this).parent().fadeOut(500, function () {
       // the above this refers to the span and .parent() makes it
       // work with the parent i.e <li>.
       // the fadeOut() is also working on parent <li> not on span
       $(this).remove();
       // $(this).remove(); is working on parent element not the span.
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
        $("ul").append("<li><span>X</span> "+todotext+"</li >")
    }
});