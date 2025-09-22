// Anime.js animations
anime({
  targets: '.in',
  translateY: [
    { value: -50, easing: 'easeInOutQuad' },
    { value: 10, easing: 'easeOutBounce', delay: 100 }
  ],
  rotate: '1turn',
  delay: anime.stagger(100),
  loop: false
});

anime({
  targets: '#icon',
  translateY: [
    { value: -50, easing: 'easeInOutQuad' },
    { value: 0, easing: 'easeOutBounce', delay: 100 }
  ],
  rotate: '4turn',
  delay: anime.stagger(100),
  loop: false
});

anime({
  targets: '.night',
  translateY: [
    { value: -50, easing: 'easeInOutQuad' },
    { value: 0, easing: 'easeOutBounce', delay: 90 }
  ],
  rotate: '2turn',
  delay: anime.stagger(100),
  loop: false
});

// DOM elements
const input = document.querySelector('.txt');
const addBtn = document.querySelector("#icon");
const list = document.querySelector("#list");
const night = document.querySelector(".night");
const body = document.body;
const todoDiv = document.querySelector(".todo");
const inputField = document.querySelector(".todo input"); 
const idicon = document.querySelector("#icon")

// Add task function
function addtask() {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.innerHTML = input.value + `
    <span class="checkbox"><input type="checkbox"></span>
    <span class="delete"><i id="icn" class="fa-solid fa-xmark"></i></span>`;

  list.appendChild(li);
  input.value = "";

  // Checkbox strike-through
  const checkBtn = li.querySelector(".checkbox");
  checkBtn.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.textDecorationColor = "grey";
    li.style.textDecorationThickness = "3px";
    li.style.color = "black";
  });

  // Delete animation
  const deleteBtn = li.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    anime({
      targets: li,
      opacity: 0,
      duration: 500,
      easing: "easeInOutQuad",
      complete: () => list.removeChild(li)
    });
  });
}


addBtn.addEventListener("click", addtask);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addtask();
});


night.addEventListener("click", () => {
  
  body.style.backgroundImage = "url('bg-desktop-dark.jpg')";
  body.style.backgroundColor = "rgb(22,23,34)";

  
  todoDiv.style.backgroundColor = "rgb(22,23,34)";

  idicon.style.color = "white";
  
  inputField.style.color = "white"; 
  input.style.placeholer.color="white"

});
