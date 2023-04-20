export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  return (
    <div id="posts-show">
      <h1>Posts</h1>
      <form onSubmit={{ handleSubmit }}>
        <h2>
          Title{" "}
          <input defaultValue={props.post.title} name="title" type="text" />
        </h2>
        <p>
          Body <input defaultValue={props.post.body} name="body" type="text" />
        </p>
        <p>
          Image{" "}
          <input defaultValue={props.post.image} name="image" type="text" />
        </p>
        <button type="submit">Update Post</button>
      </form>np
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
