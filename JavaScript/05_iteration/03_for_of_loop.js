// ====================[for-of loop]========================
const myFruits = ["Apple", "Banana", "Papaya", "Mango"]
for (const fruits of myFruits) {
    // console.log(`My Favoriat Fruits Is ${fruits}.`);
}


const srt = "Hello World";
for (const character of srt) {
    if (character == " ") {
        continue;
    }
    // console.log(`Each Character is ${character}`);
}


const map = new Map([
    ["name", "Abhishek"],
    ["Age", 23],
    ["company", "IntelliSparker"]
]);
// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} & ${value}`);
}


const mySet = new Set([10, 20, 30, 20, 10, 30, 40, 50, 70, 70, 10, 10]);
for (const val of mySet) {
    // console.log(val);
}
