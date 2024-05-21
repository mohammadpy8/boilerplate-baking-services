"use server";

export async function sendPost(data: FormData) {
  const title = data.get("username");
  const body = data.get("password");

  const res = await ((await fetch("https://jsonplaceholder.typicode.com/posts", {
    body : JSON.stringify({body , title}),
    method: 'POST',
  })).json());

  console.log(res);
}
