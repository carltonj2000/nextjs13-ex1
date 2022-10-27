import { use } from "react";

async function getPostsDetails(id) {
  let posts = await fetch(`https://dummyjson.com/posts/${id}`);
  return posts.json();
}

export default function Page({ params }) {
  const { id } = params;
  const details = use(getPostsDetails(id));
  return (
    <div>
      <h1>{details.title}</h1>
      <p>{details.body}</p>
    </div>
  );
}
