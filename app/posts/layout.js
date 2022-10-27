import Link from "next/link";
import { use } from "react";

async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");
  return posts.json();
}

export default function Layout({ children }) {
  const { posts } = use(getPosts());
  return (
    <>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>

      <div>{children}</div>
    </>
  );
}
