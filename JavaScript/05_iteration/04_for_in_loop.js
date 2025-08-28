const myObj = {
    username: "Ahishek",
    ID: "Abhishek1234",
    password: "Ahi@2004"
}
for (const key in myObj) {
    // console.log(`Key is: ${key}, and value is: ${myObj[key]}`);
};

const name = "Abhishek"
for (const character in name) {
    console.log(`Index ${character} of: ${name[character]}`);

};

const myArray = [3, 4, 5, 6, 7, 8, 9]
for (const key in myArray) {
    // console.log(`The value of index ${key} is: ${myArray[key]}`);
};

const map = new Map()
map.set('Apple', "Apple")
map.set('Banana', "Banana")
map.set('Mango', "Mango")

for (const key in map) {
    // console.log(key);
};