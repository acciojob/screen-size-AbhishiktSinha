//your JS code here. If required.
const dimensionsDisplay = document.querySelector("#sizeInfo > h1");

window.addEventListener("resize", (event)=> {
    const height = window.innerHeight;
    const width = window.innerWidth;

    dimensionsDisplay.textContent = `Width: ${width} and Height: ${height}`;
})