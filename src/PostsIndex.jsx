import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      Search filter:{" "}
      <input
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      {props.posts
        .filter((recipe) =>
          recipe.title.toLowerCase().includes(searchFilter.toLowerCase())
        )
        .map((post) => (
          <div key={post.id} className="nick-tv-shows">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} alt="Woopsy" />
            <button onClick={() => props.onShowPost(post)}>More Info</button>
          </div>
        ))}
    </div>
  );
}
