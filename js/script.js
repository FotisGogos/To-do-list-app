
function newItem(){
    //Adding a new item to the list:
    
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
    
    if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = $("#list").append(li)
       }
    
       //Crossing an item out:
       function crossOut(){
         li.toggleClass("strike");
       }
       li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    
    
    //3. Adding a delete button ("X")
      let crossOutButton = $("<crossOutButton></crossOutButton>");
      crossOutButton.append(document.createTextNode("X"));
      li.append(crossOutButton);
    
        function deleteListItem() {
        li.addClass("delete");
      }
      crossOutButton.on("click", deleteListItem);
      //Reordering the items:

       $('#list').sortable();
    }