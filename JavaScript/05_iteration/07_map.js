const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const getNum = number.map((num) => num + 10)
console.log(getNum);


const number2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const getNum2 = number2.map((num2) => {
    return num2 + 5
})
console.log(getNum2);


const number3 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const getNum3 = number3
    .map((num3) => num3 * 10)
    .map((num3) => num3 * 10)
    .filter((num3) => num3 >= 2500)

console.log(getNum3);