const h1 = document.querySelector("h1");
const button = document.querySelector('button')

const getLog = function () {
    h1.textContent = "Hey ABhishek!"
}
let stop = setTimeout(getLog, 2000)


button.addEventListener("click", function () {
    clearTimeout(stop)
    button.textContent = "Stoped"
})