const head = document.querySelector("h1")

window.addEventListener("keydown", function (dets) {
    if (dets.key === " ") {
        head.textContent = "Spc"
    }
    else
        head.textContent = dets.key
})