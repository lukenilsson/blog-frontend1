import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setisPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setisPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    setisPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios
      .patch("http://localhost:3000/posts" + id + ".json", params)
      .then((response) => {
        setPosts(
          posts.map((post) => {
            if (recipe.id === response.data.id) {
              return response.data;
            } else {
              return post;
            }
          })
        );
        handleClose();
      });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} />
      </Modal>
    </div>
  );
}
