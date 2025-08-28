
function myNewFunc() {
    let Name = "Abhishek,";
    let Age = 23;
    console.log("Name is:", Name, "Age:", Age);
}
myNewFunc()

//==========================================================

function sumOfNum(num1, num2) {
    console.log(num1 + num2);
}
sumOfNum(4, 5);

//==========================================================

function returnValue(num1, num2) {
    let sumOfNum = num1 + num2;
    return sumOfNum;
}
let ans = returnValue(30, 50)
console.log(ans)

//==========================================================

function userData(useName = "Ram") {
    if (!useName) {
        console.log("Please Inter Your username");
        return
    }
    return `${useName} Just Logged In`
}
const user = userData("Abhishek");
console.log(user);

//==========================================================

function cardprice(...Items) {
    return Items;
}
console.log(cardprice(100, 200, 500, 676));


const userData = {
    username: "Abhishek",
    userAge: 23
}

function AccessData(getData) {
    return `User Name Is: ${getData.username}, And User Age Is: ${getData.userAge}`
}
let result = AccessData({ username: "Ram", userAge: 55 });
console.log(result);


const myArray = [100, 200, 300, 478, 345];

function arrData(getArry) {
    return getArry[1];
}
console.log(arrData([400, 800, 400, 500]));
