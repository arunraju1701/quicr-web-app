import client from "./api/client";

export async function login(email, password) {
  await client
    .post(`/login`, {
      email,
      password,
    })
    .then((res) => {
      console.log("UserServices: login", response);
      return response.data;
    })
    .catch((error) => {
      console.log("UserService: login ", error);
      return;
    });
}

export async function register(data) {
  try {
    const response = await fetch(
      `https://seahorse-app-jbjgi.ondigitalocean.app/api/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: data }),
      }
    );
    return await response.json();
  } catch (error) {
    console.log("UserService: register ", error);
    return;
  }
}
