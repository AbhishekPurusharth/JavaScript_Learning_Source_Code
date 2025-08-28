// This is a normal function
// function fullName() {
//     console.log("Abhishek");
// }
// fullName()


//This is named IIFE
(function functionName() {
    console.log("Dheeraj");
})();


// This is unnamed IIFE
(() => {
    console.log("Satish");
})();


((fullName) => {
    console.log(`${fullName}`);
})("Vinay Bhosdi");