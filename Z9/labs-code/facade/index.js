async function getUserById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userData = await res.json();
  return userData;
}

async function getPostsbyUserId(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const postsData = await res.json();
  return postsData;
}

async function facade(userId) {
  const userData = await getUserById(userId);
  const userPosts = await getPostsbyUserId(userData.id);

  return { ...userData, posts: userPosts };
}

facade(1).then((result) => console.log(result));
