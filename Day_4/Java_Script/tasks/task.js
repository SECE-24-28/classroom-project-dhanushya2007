//1
function createArray(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr=[n1,n2,n3];
     console.log("Array Using the passed Arguments");
        console.log(arr);
    }
createArray(3,4,5);
createArray(7,8,9);

//3
function squareNumbers(p1,p2,p3){
    let n1=p1
    let n2=p2;
    let n3=p3;
    let arr1=[n1,n2,n3];
    for(let i=0;i<arr1.length;i++){
        arr1[i]=arr1[i]*arr1[i];
    }
    console.log("Square Array");
    console.log(arr1);
}
squareNumbers(2,3,4);
//4
function getEvenNumbers(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    let arr2=[n1,n2,n3];
    let arr3=[];
      let count=0;
    for(let i=0;i<arr2.length;i++){
      
        if(arr2[i]%2==0){
            arr3[count++]=arr2[i];
        } 
    }
    console.log("Even Numbers Array");
    console.log(arr3);
}
getEvenNumbers(1,2,4);
/*another method check filter we dont need any array*/

//5
function collectNames(p1,p2){
    let n1=p1;
    let n2=p2;
    let arr4=[n1,n2];
    let arr5=[];
    let count=0;
    for(let i=0;i<arr4.length;i++){
       arr5[i]= arr4[i].toUpperCase();
    }
    console.log("Uppercase String");
    console.log(arr5);
}
collectNames("adu","dhanu");

//7
function addTen(p1,p2,p3){
    let n1=p1
    let n2=p2;
    let n3=p3;
    let arr6=[n1,n2,n3];
    for(let i=0;i<arr6.length;i++){
        arr6[i]=arr6[i]+10;
    }
    console.log("Adding Each Elemnt ny  10");
    console.log(arr6);
}
addTen(2,3,4);

//8
function createFruitArray(p1,p2,p3){
    let n1=p1;
    let n2=p2;
    let n3=p3;
    if(n1 && n2 && n3){
        let arr7=[n1,n2,n3];
        console.log(arr7);
    }
    else
    {
        let arr8=["apple","banana"];
        console.log(arr8);
    }
}
createFruitArray("orange","mango","lemon");
createFruitArray();