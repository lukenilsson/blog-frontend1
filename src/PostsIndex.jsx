export function PostsIndex(props) {
  console.log(props);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
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
