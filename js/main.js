// Getting header into a variable
var headLine = document.getElementById("headLine");

// Getting the list items into a variable
var listItems = document.getElementById("listItems").getElementsByTagName("li");

// Getting the button into variable
var additemButton = document.getElementById("addItem");


// Getting the list item parent
var allLists = document.getElementById("listItems");
// Declaring counter variable
var counter = 1;




// Change Headline Text by clicking on list Items
allLists.addEventListener("click", activated);

// function for changing text and text background
function activated(e) {
    if(e.target.nodeName == "LI"){
        headLine.innerHTML = e.target.innerHTML;

        //looping through the listItem and removing the background
        for (i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
    
        // Adding background to the listItem when selected
        e.target.classList.add("active");
    }
}

// Adding text with the button
additemButton.addEventListener("click", addItemToTheList);

// function for addItemToTheList
function addItemToTheList(){
    allLists.innerHTML += "<li>Something new " + counter + "</li>";
    counter++;
}