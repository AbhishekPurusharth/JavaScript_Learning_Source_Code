
const myArray = ["Apple", "Banana", "Mango", "Papaya", "Guava", "PineApple", "Grapes"]
myArray.forEach(function (fruits) {
    // console.log(`My Favoriat Fruits Is ${fruits}.`);
})


const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
myArray2.forEach((code) => {
    // console.log(code);
})


const myArray3 = ["Python", "JavaScript", "C++", "TypeScript"]
function PrintKaro(items, index) {
    console.log(`Index of ${items} is ${index}`);
}
// myArray3.forEach(PrintKaro)


const myArray4 = [
    {
        username: "Abhishek",
        password: "Ahi@2004"
    },
    {
        language: "Python",
        useCase: "AI Dev"
    },
    {
        project: "IntelliSparker",
        DevBy: "Abhishek"
    }
]
myArray4.forEach((items) => {
    console.log(items.language);
    console.log(items.useCase);
})