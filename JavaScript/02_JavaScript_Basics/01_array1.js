let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let myArray2 = ["Mango", "Banana", "Apple"]

// console.log(myArray);
// console.log(myArray2);

// Methods In Array

myArray.push(11)
myArray.pop()
// console.log(myArray);
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(4));


myArray2.push(11, "Guava")
myArray2.pop()
// console.log(myArray2);

let newArray = myArray.join()
// console.log(newArray);


let Arr = myArray.slice(1, 5);
let Arr2 = myArray.splice(1, 5);

console.log("A---", myArray);
console.log(Arr);


console.log("B---", myArray);
console.log(Arr2);

console.log("C---", myArray);