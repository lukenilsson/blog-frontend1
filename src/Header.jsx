import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <a href="/">All Posts</a> |<Link to="/posts/new">New Post</Link> |
        <Link to="/about">About</Link> |<Link to="/signup">Signup</Link> |
        <Link to="/login">Login</Link> |
      </header>
    </div>
  );
}
