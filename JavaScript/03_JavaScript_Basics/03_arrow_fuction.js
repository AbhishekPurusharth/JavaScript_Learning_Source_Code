//===============================[This.Function]===============================
let obj = {
    username: "Abhishek",
    age: 23,
    func: function data() {
        console.log(`${this.username}, Welcome To The Home`);
        console.log(this);
    }
}
// obj.func()
// obj.username = "DHeeraj"
// obj.func()
// console.log(this);


//===============================[Arrow Function]===============================
// A normal function
function getDAta() {
    let username = "Abhishek"
    console.log(this.username);
}
// getDAta()

let data = () => {
    user = "Abhishek"
    console.log(this);
}
// data()


const math = (num1, num2) => {
    return num1 + num2
}
// console.log(math(5, 10)); // This is implicit Function.

const math1 = (num1, num2) => num1 + num2
// console.log(math1(7, 5)); //This is explicitFunction.

const data1 = (num1, num2) => ({ user: "Abhishek" })
// console.log(data1());

const exam = (userData) => userData
// console.log("Abhishek");
