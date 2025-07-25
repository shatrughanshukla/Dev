const clickBtn = document.getElementById("click-btn");
clickBtn.addEventListener("click", function(){
    console.log("Button click event executed");
});
        /*
        Other Event Types (you can replace "click" with):
            "mouseover" – when mouse hovers
            "keydown" – when a key is pressed
            "submit" – when a form is submitted
            "dblclick" – double click
        */

const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", function(){
    console.log("Mouseover event on div executed");
});

const inputField = document.getElementById("inputField");
inputField.addEventListener("input", function(){
    console.log("Input event executed");
})