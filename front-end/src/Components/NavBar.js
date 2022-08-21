import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/snacks" className="link">
        <h1 className='orange'>SNACKS</h1>
      </Link>

      <Link to="/">
      <button className="home-button">HOME</button>
        </Link>


        <Link to="/snacks/new">
      <button className="new-button">NEW SNACK</button>
        </Link>
     
    </nav>
  );
}
