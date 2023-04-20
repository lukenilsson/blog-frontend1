export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreatePost(params);
    event.target.reset();
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        Title: <input name="title" type="text" />
        Body: <input name="body" type="text" />
        Image: <input name="image" type="file" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
