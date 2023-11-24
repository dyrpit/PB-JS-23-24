const mainBtn = document.querySelector("#mainBtn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

mainBtn.textContent = "Create Promise";
btn1.textContent = "Log promise";
btn2.textContent = "Toggle promise rejection";

let promise = null;
let shouldReject = false;

function generatePromise() {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => (shouldReject ? reject("UPS...") : resolve("DONE")), 5000);
  });
}

function togglePromiseRejection() {
  shouldReject = !shouldReject;
}

mainBtn.addEventListener("click", generatePromise);

btn1.addEventListener("click", () => console.log(promise));
btn2.addEventListener("click", togglePromiseRejection);
