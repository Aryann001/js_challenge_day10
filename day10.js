// task 1
const task1Div = document.getElementById("task1");
let show = false;

task1Div.children[1].addEventListener("click", () => {
  show = !show;

  if (show) {
    task1Div.children[0].textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit ab quod, maiores ut natus animi exercitationem explicabo odit veritatis nulla ad id laboriosam itaque sed perferendis quam sequi commodi.";
  } else {
    task1Div.children[0].textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, dolores?";
  }

  show === true
    ? (task1Div.children[1].textContent = "show less")
    : (task1Div.children[1].textContent = "show more");
});

// Task 2
const task2Div = document.getElementById("task2");
let showImage = false;

task2Div.addEventListener("dblclick", () => {
  showImage = !showImage;

  showImage === true
    ? (task2Div.children[1].style.display = "none")
    : (task2Div.children[1].style.display = "block");
});

// Task 3
const task3Div = document.getElementById("task3");

task3Div.addEventListener("mouseover", () => {
  task3Div.style.background = "red";
});

// Task 4
task3Div.addEventListener("mouseleave", () => {
  task3Div.style.background = "black";
});

// Task 5
const task5Div = document.getElementById("task5");

task5Div.children[0].addEventListener("keydown", (e) => {
  console.log(e.key);
});

// Task 6
task5Div.children[0].addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// Task 7
const task7Form = document.getElementById("task7");

task7Form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target[0].value);
  console.log(e.target[1].value);
});

// Task 8
const task8Select = document.getElementById("task7Select");

task8Select.addEventListener("change", (e) => {
  console.log(e.target.value);
});

// Task 9
const task9List = document.getElementById("task9List");

task9List.addEventListener("click", () => {
  for (let i = 0; i < task9List.children.length; i++) {
    console.log(task9List.children[i].textContent);
  }
});

// Task 10
const task10Btn = document.getElementById("task10");

task10Btn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.textContent = "New";

  task9List.appendChild(newLi);
});
