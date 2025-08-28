//+++++++++++++++++++++++++++ Numbers ++++++++++++++++++++++++++

const score = 200;
console.log(score);
console.log(typeof score);
const number = new Number(50.466);
console.log(number);
console.log(number.toFixed(2));


const data = 24.34875;
console.log(data.toPrecision(3));
const data2 = 3.99437;
console.log(data2.toPrecision(2));


const InNumberString = 349865634789;
console.log(InNumberString.toLocaleString('en-IN'));
const USNumberString = 6789345958;
console.log(USNumberString.toLocaleString('en-US'));


//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5.5));
console.log(Math.round(23.46));
console.log(Math.ceil(45.4));
console.log(Math.floor(69.7));

console.log(Math.min(5, 8, 3, 5, 6, 7, 4, 10, 0));
console.log(Math.max(5, 8, 3, 5, 6, 7, 4, 10, 0));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1);

let min = 20;
let max = 30;
console.log(Math.floor(Math.random() * (max - min) + 1) + min);
