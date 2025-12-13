setTimeout(()=>{
    console.log("Settimeout function ");
    
},0);//,2000
//call back fun and timer
console.log("Hello world");

// //callback hell por nested call back
// setTimeout(()=>{
//     console.log("Settimeout function 1");
//     setTimeout(()=>{
//         console.log("Settimeout function 2");
//         setTimeout(()=>{
//             console.log("Settimeout function 3");
//             setTimeout(()=>{
//                 console.log("Settimeout function 4");
//                 setTimeout(()=>{
//                     console.log("Settimeout function 5");
//                 },2000);
//             },2000);
//         },2000);
//     },2000);
// },2000);

//promises
//3 state
//1.pending
//2.fulfilled(resolved)
//3.rejected(rej)

//promises pass a callback with two parameters
// let myPromise=new Promise((res,rej)=>{
//     let m=50;
//     if(m>=60){
//         res("Passed");
//     }
//     else{
//         rej("Failed");
//     }
// });

// //way to call promise
// //1. .then() and .catch()
// myPromise.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
    
// });
//cause mutiple chaining

//async and await
//no error handling

// let handlePromise=async ()=>{
//     try{
//         console.log("Test");
//         let response =await myPromise;
//         console.log(response);
//         console.log("Anything");
//     }catch(err){
//         console.log(err);
//     }finally{
//         console.log("This will execute ")
//     }
// };

// handlePromise();


// //fetch api
// let fetchData=()=>{
//     fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("value is ",data);
        
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     });
// };

let fetchData2=async()=>{
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response);
        const data=await response.json();
        //to store locally
        localStorage.setItem("responseData",JSON.stringify(data));
        console.log("value is ",data);
    }
    catch(err){
        console.log(err);
        
    }
};
let localData=JSON.parse(localStorage.getItem("responseData")) || [];
//manually server load 
if(localData.length <= 0){
    fetchData2();
}
// fetchData2();