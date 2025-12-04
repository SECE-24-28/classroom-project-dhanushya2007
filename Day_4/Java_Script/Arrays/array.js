//creation of array
let arr = [1,2,3,4,5,6];
console.log(arr);

//for Lopp
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]+i;
}
console.log(arr);

//forEach
let arr1=[1,2,3,4,5];
arr.forEach((element,index)=>{
    console.log(element,index);
});


let arr2=[1,2,3,4];
/*let aa1=arr.map((el,ind)=>{
      return el+ind;
});*/
let aa=arr.map((el,ind)=>el+ind);
{
     console.log(arr2);
     console.log(aa);
}

//filter=> It will work on truthy values =>when you are having condition that returns multiple values
let a=[1,2,3,4,5,6];
let b=a.filter((el,ind)=>{
    return ind>5;
});
console.log(b);

//reduce :returns a single 
let s=[1,2,3,4,5];
let z = s.reduce((acc,el,index)=>{
    console.log(acc,el);
    return acc+el;
},200);
console.log(z);


//