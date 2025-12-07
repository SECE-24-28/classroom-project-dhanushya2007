//get all Instances
let text=document.querySelector("#text");
let box=document.querySelector("#box");
let changeTxtBtn=document.querySelector(".ChangeTxtBtn");
let changeColor=document.querySelector(".changebgcolor");
let hide=document.querySelector(".hide");
let show=document.querySelector(".show");
let list=document.querySelector("#list");
let addBtn=document.querySelector("#addBtn");
let item=document.querySelector("#item");



//Function changeText

changeTxtBtn.addEventListener("click",()=>{
     text.textContent="Text has been Changed";
});
changeColor.addEventListener("click",()=>{
    box.style.backgroundColor = "blue";
});

function showBox(){
    document.getElementById("box").style.display="block";
}
function HideBox(){
    document.getElementById("box").style.display="none";
}
// hide.addEventListener("click", () => {
//   box.classList.add("hidden");
//   console.log("Hide clicked; class list:", box.className);
// });

// show.addEventListener("click", () => {
//   box.classList.remove("hidden"); 
//   console.log("Show clicked; class list:", box.className);
// });

addBtn.addEventListener("click",()=>{
let value=item.value.trim();
if(value!==""){
  let li=document.createElement("li");
li.textContent=value;
list.appendChild(li);
item.value="";
}
});


