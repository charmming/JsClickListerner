var headLine = document.getElementById("headLine");

var listItems = document.getElementById("listItems").getElementsByTagName("li");

var addItem = document.getElementById("addItem");

var newItemList = document.getElementById("listItems");

var counter = 1;
newItemList.addEventListener("click", activated);

function activated(e){
    if(e.target.nodeName == "LI"){
        headLine.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }
}

addItem.addEventListener("click", addItems);

function addItems(){
    newItemList.innerHTML += "<li>Something new " + counter + "</li>";
    counter++;
}