import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function PostsShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios
      .get(`http://localhost:3000/posts/${params.id}.json`)
      .then((response) => {
        setPost(response.data);
      });
  };

  useEffect(handleShowPost, []);

  return (
    <div id="posts-show">
      <h1>Posts Yall</h1>
      <div>
        <h2>Title: {post.title}</h2>
      </div>
      <div>
        <img src={post.image} alt="" />
      </div>
      <div>{post.body}</div>
    </div>
  );
}
