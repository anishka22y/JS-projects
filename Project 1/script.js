// Selecting elements
const button = document.querySelector("button");
const body = document.querySelector("body");


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let currentColor = getRandomColor(); 
function changeTheBackground() {
    let newColor;
    
    do {
        newColor = getRandomColor();
    } while (newColor === currentColor); 
    
    currentColor = newColor;
    
    body.style.backgroundColor = newColor;
}
body.style.backgroundColor = currentColor;
button.addEventListener("click", changeTheBackground);
