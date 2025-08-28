const myObject = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(myObject);

// console.log(Math.PI);
// Math.PI = 6
// console.log(Math.PI);

let newObject = {
    name: "Abhishek",
    emil: "abhi@shek.com",
    newFunction: function () {
        console.log(`Value nhi aayega`);
    }
};

console.log(Object.getOwnPropertyDescriptor(newObject, "name"));

// let changed = Object.defineProperty(newObject, "name", {
//     writable: false,
//     enumerable: false,
//     configurale: false
// });
// console.log(Object.getOwnPropertyDescriptor(newObject, "name"));

for (const [key, value] of Object.entries(newObject)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}