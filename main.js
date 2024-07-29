
document.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
})



function randomColor() {
    const colors = ["red", "pink", "green", "blue", "skyblue"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

