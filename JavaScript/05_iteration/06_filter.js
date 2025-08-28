let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const getNumber = numList.filter((num) => num >= 5)
// console.log(getNumber);


let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const data = myNum.filter((num) => {
    return num > 5
})
// console.log(data);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


const booksList = books.filter((bk) => {
    return bk.genre === "Science"
})
// console.log(booksList);

const booksList1 = books.filter((bk2) => {
    return bk2.publish >= 1981 && bk2.genre === "History"
})
// console.log(booksList1);
