const mainBtn = document.querySelector("#mainBtn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

mainBtn.textContent = "Generate user";

[btn1, btn2].forEach((el) => (el.style.display = "none"));

let usersPromises = [];
const userIds = [1, 2, 3];

function getUsers() {
  userIds.forEach((id) => {
    const userPromise = fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    ).then((response) => response.json());
    usersPromises.push(userPromise);
  });

  Promise.race(usersPromises).then((user) => console.log(user));
  usersPromises = [];
}

mainBtn.addEventListener("click", getUsers);
