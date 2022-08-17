import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>SNACKS</h1>

      <button className="new-button">
        <Link to="/snacks/new">NEW</Link>
      </button>
    </nav>
  );
}
