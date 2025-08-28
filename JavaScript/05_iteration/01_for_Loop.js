//====================[for loop]========================

for (let i = 1; i <= 10; i = i + 1) {
    console.log("Abhishek");
}


for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}


for (let i = 1; i <= 10; i = i + 1) {
    if (i == 5) {
        break
    } else
        console.log(i);
}


for (let i = 1; i <= 10; i = i + 1) {
    if (i == 5) {
        continue
    } else
        console.log(i);
}


const myArray = ["Mango", "Banana", "Papaya", "Apple"]
for (let i = 0; i < myArray.length; i = i + 1) {
    console.log(`The value is ${myArray[i]}`);
};
