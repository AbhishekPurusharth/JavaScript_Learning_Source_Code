const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const h2 = document.querySelector('h2')

let IntervalID = null;

const print = function () {
    h2.textContent = new Date().toLocaleTimeString()
};

btn1.addEventListener('click', function () {
    if (IntervalID === null)
        IntervalID = setInterval(print, 1000);
});

btn2.addEventListener('click', function () {
    if (IntervalID !== null)
        clearInterval(IntervalID)
    IntervalID = null;
});