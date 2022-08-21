import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/snacks" className="link">
        <h1 className='orange'>SNACKS</h1>
      </Link>

      <button className="new-button">
        <Link to="/snacks/new">NEW SNACK</Link>
      </button>
    </nav>
  );
}
