console.log(a);
//hoisting
var a=10;
//global or funciton scope
console.log(a);

//ES6
//let and const
//console.log(b);
//reference error
//temporal dead zone
let b=20;
b=140;
//Block scope
console.log(b);

//{
//  let b=30;
//  console.log(b);
//}

// console.log(c);
const c=40;
//c=70;=>Type Error
console.log(c);

//namedFunc();
//calling func before declaration

//functions
//1.Named functions
//func declaration
function namedFunc(){
    console.log("Named func called");
    console.log("Named func called");
    console.log("Named func called");
}

//func call or invocation
namedFunc();

// funcexp();
// Type error will get if we call before this one
//2.Function Expression
var funcexp = function(){
    console.log("Func expression called");
}

funcexp();

//3.Arrow functions(ES6)
let arrow = ()=>{
    console.log("Arrow expression called");
}
arrow();

//4. Callback func and 
/* 5. IIFE(Immediately Invoked function expression)
An IIFE is a function that runs immediately after it is defined. It’s wrapped in parentheses and invoked right away.*/

(()=>(
    console.log("Callback and life function called")
))();

//add two numbers
const addTwo = (p1,p2)=>{
    console.log(p1,p2);
  let n1=p1;
  let n2=p2;
  let sum=n1+n2;
  console.log(`The Sum of ${n1} and ${n2} is ${sum}`);
};
addTwo(20,50);
//without parameter =>no error undefined will print
addTwo();

const subTwo = (p1,p2)=>{
    let n1=p1;
    let n2=p2;
    if(n1<=0 || n2<=0){
        console.log("The value must be greater than 0");
    }
    else{
    let sub=n1-n2;
    console.log(`The Sum of ${n1} and ${n2} is ${sub}`);
    }  
};
subTwo(0,6);
subTwo(9,6);
subTwo();

const mulTwo =(p1,p2)=>{
    let n1=p1;
    let n2=p2;
    if(n1==0 || n2==0){
        console.log("Multiplication :0");
    }
    else{
        let mul=n1*n2;
        console.log(`The Sum of ${n1} and ${n2} is ${mul}`);
    }

};
mulTwo(0,9);
mulTwo(9,9);
mulTwo();

const divTwo =(p1,p2) =>{
    let n1=p1;
    let n2=p2;
    if(n2<=0){
        console.log("The value Must be Greater than 0");
    }
    else{
        let div=n1/n2;
        console.log(`The Sum of ${n1} and ${n2} is ${div}`);
    }
};
divTwo(2,0);
divTwo(9,3);
divTwo();

