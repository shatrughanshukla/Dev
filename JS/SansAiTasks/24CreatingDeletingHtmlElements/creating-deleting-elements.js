const list  = document.getElementById("list");
const addButton = document.getElementById("addButton");

function addListItem(){
    const newItem = document.createElement("li");
    const count = list.children.length + 1;
    newItem.textContent = `New Item ${count}`;
    list.appendChild(newItem);
}

addButton.addEventListener("click", addListItem);

const removeButton = document.getElementById("removeButton");

function removeLastListItem(){
    const lastItem = list.lastElementChild;
    if(lastItem){
        list.removeChild(lastItem);
    }
}

removeButton.addEventListener("click", removeLastListItem);