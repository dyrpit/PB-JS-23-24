// Get user with ID 5
// Use “https://jsonplaceholder.typicode.com/users” endpoint
// console log the name

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getUserName(userId) {
  return fetch(`${API_URL}/${userId}`).then((res) => res.json());
}

getUserName(5).then((user) => console.log(user.name));
