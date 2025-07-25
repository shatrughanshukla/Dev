const textPara = document.getElementById("textPara");
const textBtn = document.getElementById("textBtn");

textBtn.addEventListener("click", function(){
    textPara.textContent = "Text has been changed!";
});

const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function(){
    hoverBox.style.backgroundColor = "yellow";
    hoverBox.style.color = "blue";
});

const insertBtn = document.getElementById("insertBtn");
const htmlContent = document.getElementById("htmlContent");

insertBtn.addEventListener("click", function(){
    htmlContent.innerHTML = `
    <h3>Tihs is a heading</h3>
    <p>This paragraph was added using innerHTML!</p>
    `
});

const togglePara = document.getElementById("togglePara");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function(){
    if(togglePara.style.display === "none"){
        togglePara.style.display = "block";
    }else{
        togglePara.style.display = "none";
    }
});