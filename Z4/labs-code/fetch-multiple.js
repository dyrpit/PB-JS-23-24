// For a given array of ids (ex. [2,5,6,8])
// Fetch all users with corresponding ids
// console log all fetched user names
// Use “https://jsonplaceholder.typicode.com/users” endpoint

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getUser(userId) {
  return fetch(`${API_URL}/${userId}`).then((res) => res.json());
}

function getUsers(ids) {
  const userPromises = ids.map((id) => getUser(id));
  return Promise.all(userPromises);
}

const ids = [2, 5, 6, 8];

getUsers(ids).then((users) => users.forEach((user) => console.log(user.name)));
