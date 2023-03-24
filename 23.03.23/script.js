let ul = document.getElementById("ul")
let bars = document.getElementById("bars")
let Xmark = document.getElementById("x-mark")
let overlay = document.getElementById("overlay")

bars.onclick = function() {
    bars.style.display = "none"
    ul.style.display = "block"
    Xmark.style.display = "block"
    overlay.style.display = "block"
}

Xmark.onclick = function() {
    Xmark.style.display = "none"
    ul.style.display = "none"
    bars.style.display = "block"
    overlay.style.display = "none"
}