// Add error handling to the previous exercise
// Use “https://jsonplaceholder.typicode.com/users” endpoint
// Include network errors
// Include server errors

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getUserName(userId) {
  return fetch(`${API_URL}/${userId}`).then((response) => {
    if (response.ok === false) {
      throw new Error(`Communication error! Status: ${response.status}`);
    }

    return response.json();
  });
}

getUserName(5)
  .then((user) => console.log(user.name))
  .catch((error) => console.error(error.message));
