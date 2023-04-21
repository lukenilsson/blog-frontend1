import { Modal } from "./Modal";
import { Link } from "react-router-dom";
import { Signup } from "./Signup";
import { useState } from "react";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
      <a href="/">All Posts</a> |<Link to="/posts/new">New Post</Link> |
      <Link to="/about">About</Link> |
      {localStorage.jwt === undefined ? (
        <>
          <li>
            <a href="/signup">Signup</a>
          </li>
          <li>
            <a href="/Login">Login</a>
          </li>
        </>
      ) : (
        <li>
          <a href="#Logout">Logout</a>
        </li>
      )}
    </header>
  );
}
