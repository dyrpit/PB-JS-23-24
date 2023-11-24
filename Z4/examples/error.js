const mainBtn = document.querySelector("#mainBtn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

mainBtn.textContent = "Generate error";

[btn1, btn2].forEach((el) => (el.style.display = "none"));

function example1() {
  example2();
}

function example2() {
  example3();
}

function example3() {
  throw new Error("Ups...");
}

mainBtn.addEventListener("click", example1);
