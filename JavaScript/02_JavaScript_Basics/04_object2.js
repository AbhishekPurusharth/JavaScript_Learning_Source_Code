const userData = {}

userData.Id = "Abhi1234"
userData.Name = "Abhishek"
userData.IsLoggedIn = false

// console.log(userData);
// console.log(typeof userData);

//====================================================================

const secondUserData = {
    Email: "abhishek@gmail.com",
    fullName: {
        fullUserName: {
            firstName: "Abhishek",
            lastName: "Purusharth",
        }
    }
}

// console.log(secondUserData.fullName.fullUserName);
// console.log(typeof secondUserData);

const keys = Object.keys(secondUserData);
const value = Object.values(secondUserData);
// console.log(keys);
// console.log(value);

// console.log(secondUserData.hasOwnProperty("Email"));

//====================================================================

const obj1 = { A: 1, B: 2, }
const obj2 = { C: 3, D: 4, }
const obj3 = { E: 5, F: 6, }

const obj4 = { obj1, obj2, obj3 }
// console.log(obj4);

const obj5 = Object.assign(obj1, obj2, obj3);
// console.log(obj5);

// const obj6 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj6);

//====================================================================

const newData = [
    {
        name: "Abhishek"
    },
    {
        Email: "abhishek@gmail.com"
    },
    {
        ID: "Abhi1234",
        secondID: "Abhishek1234"
    },
    {
        IsLoggedIn: true
    },
]

// console.log(newData[2].secondID);
// console.log(newData[3].IsLoggedIn);
console.log(typeof newData);
console.log(Array.isArray(newData));

//====================================================================
// Object Destructuring

const user = {
    userName: "Abhishek",
    userAge: 23,
    userCompany: "Purusharth",
}

const { userName: A, userAge: B } = user
// console.log("Username is:", A, "And user Age is:", B);

//====================================================================