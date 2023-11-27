// For a given array of ids (ex. [2,5,6,8])
// Fetch all users with corresponding ids
// console log user emails
// Use “https://jsonplaceholder.typicode.com/users” endpoint
// Handle errors (try/catch)
// Use async/await

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUser(userId) {
  const response = await fetch(`${API_URL}/${userId}`);

  if (!response.ok) {
    throw new Error(`Fetch failed with status: ${response.status}`);
  }

  return response.json();
}

function getUsers(ids) {
  const userPromises = ids.map((id) => getUser(id));
  return Promise.all(userPromises);
}

const ids = [2, 5, 6, 8];

(async function iife() {
  try {
    const users = await getUsers(ids);
    users.forEach((user) => console.log(user.email));
  } catch (error) {
    console.error("There was an error", error);
  }
})();
