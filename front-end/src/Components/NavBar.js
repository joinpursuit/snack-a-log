import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to='/'>Home</Link>
      </h1>
      <h4>
        <Link to='/snacks'>Snacks</Link>
      </h4>
      <button>
        <Link to='/snacks/new'>New Snack</Link>
      </button>
    </nav>
  );
};

export default NavBar;
