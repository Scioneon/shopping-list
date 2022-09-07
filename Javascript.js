$(document).ready(function () {

    //delegate the item list
    $("#js-shopping-list-form").submit(function (event) {

        // prevents the default submit or form
        event.preventDefault();

        //get the input value
        const Item = $(".js-shopping-list-entry").val();

        //clear the input (important!)
        $(".js-shopping-list-entry").val('');

        //add the new shopping item with template literals (backticks are template literals ``)
        $(".shopping-list").append(
            `<li>
            <span class= "shopping-item">${Item}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
            </li>`);
    });


    // delagating the click event on the body (event delagation)
    //This lets you target dynamic items (added/remove after page loads)
    $("body").on("click", ".shopping-item-delete", function (event) {
        console.log((this).closest("li"));
        $(this).closest("li").remove();
    });

    //alert("Document is ready!");
    $("body").on("click", ".shopping-item-toggle", function (event) {
        console.log(event);
        $(this).closest("li").children(".shopping-item").addClass("shopping-item__checked");
        //shopping-item shopping-item__checked
    });

});

// click additem
// get input value on submit with jquery

//Look up
// target UL
// add new LI item Like the one below,
//                  <li>
//                < span class="shopping-item" > apples</span >
//     <div class="shopping-item-controls">
//         <button class="shopping-item-toggle">
//             <span class="button-label">check</span>
//         </button>
//         <button class="shopping-item-delete">
//             <span class="button-label">delete</span>
//         </button>
//     </div>
//             </li >
// use Jquery .html(additem) --> pass element to the HTML method 
