// Get user name with ID 5
// Use “https://jsonplaceholder.typicode.com/users” endpoint
// Remember that this endpoint returns JSON!
// console log user’s email
// Handle errors
// Use async/await

const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUser(userId) {
  const response = await fetch(`${API_URL}/${userId}`);

  if (!response.ok) {
    throw new Error(`Fetch failed with status: ${response.status}`);
  }

  return response.json();
}

(async function iife() {
  try {
    const user = await getUser(5);
    console.log(user.email);
  } catch (error) {
    console.error("There was an error", error);
  }
})();
