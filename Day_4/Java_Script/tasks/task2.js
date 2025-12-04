const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5
// 2. Get the names of all books published after 2020
// 3. Calculate the total price of all Programming books
// 4. Find the average number of pages of all books in the Design category
// 5. Get a list of authors who have written books with a rating less than 4.0
// 6. Find the most expensive book in the collection
// 7. Get all books that have more than 300 pages and are priced below 500
// 8. Create a new array with book names and their respective authors


let b=books.filter((el)=>{
    return el.rating>4.5;
});
console.log(b);
//2
let n=books.filter((el)=>{
    return el.publishedYear>2020;
});
console.log(n);
//3
let programbooks=books.filter((el)=>{
    return el.category==="Programming";
})
let price=programbooks.reduce((sum,books)=>sum+=books.price,0);
console.log("Total Price",price);
//4
let design=books.filter((el)=>{
    return el.category==="Design";
});
let price1=design.reduce((sum1,books)=>sum1+=books.pages,0);
let avd1=price1/design.length;
console.log("Average",avd1);
//5
let rate=books.filter((el)=>{
    return el.rating<4.0;
});
let authour=rate.map(el=>el.author);
console.log("Authour Arrays");
console.log(authour);
//6
let exp=books.reduce((books,max)=>{
    return books.price<max.price?max:books
});
console.log(exp);
//7
let a=books.filter((el)=>{
    return el.pages>300 && el.price<500;
});
console.log("Book",a);
//8
let nu=books.map((book)=>({
    names:book.bookName,
    author:book.author
}));
console.log(nu);
