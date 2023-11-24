const mainBtn = document.querySelector("#mainBtn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

mainBtn.textContent = "Generate users";

[btn1, btn2].forEach((el) => (el.style.display = "none"));

const usersPromises = [];
const userIds = [1, 2, 3];

function getUsers() {
  userIds.forEach((id) => {
    const userPromise = fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    ).then((response) => response.json());
    usersPromises.push(userPromise);
  });

  Promise.all(usersPromises).then((users) => console.log(users));
}

mainBtn.addEventListener("click", getUsers);
