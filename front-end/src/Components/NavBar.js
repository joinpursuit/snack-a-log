import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/snacks">List of Snacks</Link>
            <Link to="/snacks/new">New Snack</Link>
        </div>
    );
};

export default NavBar;