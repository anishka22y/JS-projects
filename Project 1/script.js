// Selecting elements
const button = document.querySelector("button");
const body = document.querySelector("body");

// Function to generate a random color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let currentColor = getRandomColor(); // Initialize with a random color

// Function to change the background
function changeTheBackground() {
    let newColor;
    
    do {
        newColor = getRandomColor();
    } while (newColor === currentColor); // Prevent consecutive same colors
    
    currentColor = newColor; // Store the current color
    
    body.style.backgroundColor = newColor;
}

// Setting a default color
body.style.backgroundColor = currentColor;

// Adding event listener to the button
button.addEventListener("click", changeTheBackground);
