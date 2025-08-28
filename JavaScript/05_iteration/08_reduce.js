let arr = [1, 2, 3, 4]
const getArr = arr.reduce(function (acc, currval) {
    console.log(`acc:${acc}, currval:${currval}`);
    return acc + currval;
}, 2)
console.log(getArr);


let myArray = [5, 6, 7, 8, 9]
const getMyArray = myArray.reduce((acc, currval) => acc + currval, 0)
console.log(getMyArray);


const itemsPrice = [
    {
        mobile: "Infinix GT10 Pro",
        price: 24999
    },
    {
        mobile: "Iphone 16 Pro Max ",
        price: 139999
    },
    {
        mobile: "Samsung S25 Ultra",
        price: 169999
    },
    {
        mobile: "Nokia 420",
        price: 999
    }
]
const priceToPay = itemsPrice.reduce((phone, items) => phone + items.price, 0)
console.log(priceToPay);
