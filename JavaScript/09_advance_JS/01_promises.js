//==================================== Promis One //====================================
const promisOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise One");
        resolve();
    }, 1000);
})
promisOne.then(function () {
    console.log("Promise one consumed");
});


//==================================== Promis Two //====================================
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promise two");
        resolve();
    }, 2000)
}).then(function () {
    console.log("promise two is consumed");
});


//==================================== Promis Three //====================================
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ name: "Abhishek", age: 23, emai: "abhiahekpurusharth@gmil.com" });
    }, 3000);
})
promiseThree.then(function (userData) {
    console.log(userData);
});


//==================================== Promis Four //====================================
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Abhishek", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 4000);
})
promiseFour
    .then(function (user) {
        console.log(user);
        return user.username
    })
    .then(function (username) {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("The promise is either resolved or rejected")
    });


//==================================== Promis Five //====================================
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ language: "JavaScript", project: "aiDev" });
        } else {
            reject("Something went wrong");
        }
    }, 5000);
});
async function consumedPromiseFive() {
    try {
        let response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumedPromiseFive();


//==================================== Promis Six //====================================
async function PromiseSix() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let jsonData = await response.json()
        console.log(jsonData);

    } catch (error) {
        console.log(error);
    }
}
PromiseSix();


//==================================== Promis Seven //====================================
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (getData) {
        return getData.json
    })
    .then(function (getUserData) {
        console.log(getUserData);
    })
    .catch(function (error) {
        console.log(error);
    })