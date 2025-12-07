let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   let name=document.querySelectorAll("input")[0];
    let feedback=document.querySelectorAll("input")[1];
    if(name.value===" "){
        alert("Name is required");
        return;
    }
    if (feedback.value.length < 5) {
    alert("Feedback must be at least 5 characters long");
    }
    let result = document.querySelector("#result");
    result.innerHTML = `thankyou ${name.value} for yourrr feedbackss`;
    form.reset();
});