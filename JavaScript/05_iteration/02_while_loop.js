//====================[while loop]========================

let i = 1;
while (i <= 10) {
    console.log(i);
    i = i + 1
}


let index = 1;
while (index <= 10) {
    console.log("Abhishek");
    index = index + 1
}


let b = 1;
while (b <= 10) {
    if (b == 6) {
        break
    } else
        console.log(b);
    b = b + 1
}


let c = 1;
while (c <= 10) {
    if (c == 7) {
        c = c + 1;
        continue;
    }
    console.log(c);
    c = c + 1;
}


const myArray = ["Mango", "Banana", "Orange"]
let d = 0;
while (d < myArray.length) {
    console.log(`My Favorite Fruit is: ${myArray[d]}`);
    d = d + 1
}

//====================[do-while loop]========================

let a = 1;
do {
    console.log(`The Value is ${a}`);
    a = a + 1
} while (a <= 10);


const newArray = ["JavaScript", "Python", "C++", "TypeScript"]

let x = 0;
do {
    console.log(`Programing Language: ${newArray[x]}`);
    x = x + 1
} while (x < newArray.length); 