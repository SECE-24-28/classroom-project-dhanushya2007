// //1.Tag Selector
// let heading1=document.getElementById("h1");
// //htmlCollection Array 
// console.log(heading1);

// //class Selector
// let c1=document.getElementsByClassName("a");
// //htmlCollection Array
// console.log(c1[0]);

// //ID Selector
// let idd=document.getElementById("b");
// //it will return a single value and first element
// console.log(idd);

// //QuerySelector=>we can select all the tag,class(.),id(#)[Widely Used]
// let qe=document.querySelector("h1");
// //It will Return a single element and first lement 
// console.log(qe);


// //QuerAllSelector =>Same as QuerySelector but return multiple elemts
// let qa=document.querySelectorAll("#b");
// //NodeList Array
// console.log(qa);

//Read and Write Operation
let head=document.querySelector("p");
//Read Operation
console.log(head.textContent);

//write Operation
head.textContent="This is a new paragraph content";


let div=document.querySelector("div");
div.innerHTML="<p>Hello From Para</p>";
//div.textContent="<p>This is a new paragraph</p>";
console.log(div.textContent);

console.log(div.innerHTML);


//If class is present=>remove 
//if class is not present=>add that

//add/remove//toggle
let head1=document.querySelector("h1");
console.log(head1);
head1.classList.add("color");
head1.classList.remove("border");
head1.classList.toggle("background");

//styling
let p=document.querySelector("p");
p.style.color="red";
p.style.backgroundColor="green";


//createElement
let ul=document.createElement("ul");
let li1=document.createElement("li");
li1.textContent="Item 1";
let li2=document.createElement("li");
li2.textContent="Item 2";
ul.appendChild(li1);
ul.appendChild(li2);
document.body.append(ul);
let arr=["apple","mango","Banana"]
arr.forEach((element)=>{
    let lo=document.createElement("li");
    lo.textContent=element;
    ul.appendChild(lo);
})

