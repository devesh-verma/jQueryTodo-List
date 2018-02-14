# jQueryTodo-List

###Giving basic strike out and revert back functionality

* The code below provide the basic strike through and back to normal functionality.

```js
// Check off specific todos by clicking
$("li").click(function () {
    //if it is grey
    if ($(this).css("color") === "rgb(128, 128, 128)"){
        //then turn it black
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }
    //else
    else{
        //turn this grey
        $(this).css({
            color: "grey",
            textDecoration: "line-through"
        });
    }
});
```
* The code above can be replaced with the code below by making use of `toggleClass()` and adding a 
  class `completed` to `todos.css`
```css
.completed {
    color: grey;
    text-decoration: line-through;
}
```
* Update the code in `todos.js` as below.
```js
$("li").click(function () {
   $(this).toggleClass("completed")
});
```
