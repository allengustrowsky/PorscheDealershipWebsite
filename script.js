
// change buttons and pointer on hover
const items = document.querySelectorAll(".navbar-item2>span")
items.forEach((item) => {
    item.addEventListener("mouseover", () => {
        console.log("hovered over")
        item.style.cursor = "pointer"
        item.style.backgroundColor = "black"
        item.style.color = "white"
    })
    item.addEventListener("mouseout", () => {
        item.style.cursor = "none"
        item.style.backgroundColor = ""
        item.style.color = "black"
    })
    
})

const logo = document.getElementById("porscheLogo");
logo.addEventListener("mouseover", (event) => {
    event.target.style.cursor = "pointer"
})

