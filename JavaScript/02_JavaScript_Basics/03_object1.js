let mySym = Symbol("sym1");

let useData = {
    name: "Abhishek",
    Age: 23,
    [mySym]: "mysys1",
    Email: "abhishek@intellisparker.com",
    "Second Email": "abhishek@stackbulker.com",
    isLoggedIn: false,
    Array: [3, 4, 5, 6, 7,]
}

// console.log(useData);
// console.log(useData.name);
// console.log(useData.Email);
// console.log(useData["Second Email"]);

// console.log(useData[mySym]);
// console.log(typeof useData[mySym]);

// console.log(useData.Array);
Object.freeze(useData);
useData.Email = "abhishek@stackbulker.com"
// console.log(useData.Email);

