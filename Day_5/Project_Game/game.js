//1.we need all instance
let againBtn=document.querySelector(".again");
let number=document.querySelector(".number");
let guess= document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let msg =document.querySelector(".message");


// 2.get a random NUmber
let randomNum=Math.trunc(Math.random()*20)+1;//why 1=> because it generate a value 0 ald=so to make that 1
console.log("Random Number",randomNum);

//2.1 create a variable of score
let scr=20;

//Button Functionalities
//In addEventLister()=>two paramater needed
//1.event that we want to occur 2.callback when

checkBtn.addEventListener("click",()=>{
     let inputVal = Number(guess.value);//whenever we are reading input from thr box they are in the form of string
     console.log(inputVal,randomNum);
     if(!inputVal){
        alert("please Enter a Number");
        msg.textContent="No number";
     }
   //3.1 Input value os equal to random number
     else if(inputVal===randomNum){
        //3.1.1 change the background colour
        document.body.style.backgroundColor="green";
        //3.1.2 Instead of ? put a random number
        number.textContent=randomNum;  
        //3.1.3 at highscore we have to put a value of highscore
        if(scr>Number( highscore.textContent))
        highscore.textContent=scr;
        //3.1.4 Show coorect value message
        msg.textContent="Value is Correct";
     }
      // 3.2 input value is greater than random number
       else if(inputVal>randomNum){
       //3.2.1 Decrease score by 1
       scr-=1;
       score.textContent=scr;
       //3.2.2 Show message "too high "
       msg.textContent="Too High";
     }
     //3.3 Value is Low
     else if(inputVal<randomNum){
        //3.3.1 Decrease value by 1
        scr-=1;
        score.textContent=scr;
        //3.3.2 shoe the message "too Low"
        msg.textContent="Too Low";;
     }

    });
    //In a callback function call dont pass the function,just pass the reference if you pass function it will generate automatically
    //4 again Butoon func
    let init =()=>{
       //4.1 Reset all values to initial stage
       scr=20;
        score.textContent=scr;
        number.textContent="?";
        guess.value=" ";
        msg.textContent="Start Guessing...."
        randomNum=Math.trunc(Math.random())*20+1;
        document.body.style.backgroundColor="black";

    }
    againBtn.addEventListener("click",init);
     

    









    //console.log("Button Clicked ",randomNum);
    //cpnsole.log(randomNum);


