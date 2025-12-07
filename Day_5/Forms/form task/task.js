let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("input");
  let course = document.querySelector("#course");
  let rating = document.querySelector("#rating");
  let feedback = document.querySelector("#feedback");
  let result = document.querySelector("#output");
  let feedbackList = document.querySelector("#feedbackList");

  console.log(name.value, course.value, rating.value, feedback.value);

  // if (name.value === "") {
  //   alert("Name field is required");
  //   return;
  // }
  // if (feedback.value.length < 5) {
  //   alert("Feedback must be at least 5 characters long");
   //  return;
  // }
  result.style.display = "block";
let box=document.createElement("div");
box.classList.add("q");

  box.innerHTML = `<h3 class="aa">Thank you, ${name.value}, for your feedback!</h3>
    <p class="bb">Course: ${course.value}</p>
    <p class="bb">Rating: ${rating.value}/5</p>
    <p class="bb">Your feedback: ${feedback.value}</p>
  `;
 feedbackList.appendChild(box);

  form.reset();
});

  