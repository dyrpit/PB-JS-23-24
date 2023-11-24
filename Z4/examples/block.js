const mainBtn = document.querySelector("#mainBtn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

function blockForSomeTime() {
  const start = new Date().getTime();
  while (new Date().getTime() < start + 5000) {}
}

mainBtn.addEventListener("click", blockForSomeTime);

btn1.addEventListener("click", () => console.log("Log btn1"));
btn2.addEventListener("click", () => console.log("Log btn2"));
