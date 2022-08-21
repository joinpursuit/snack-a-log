import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

const NavBar = () => {
    return (
      <nav className="Nav">
        <div>
          <Link to="/snacks">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEmhmCjYwSoB0XDsbLy70ku_Dtkh0RVCsoQ&usqp=CAU"
              class="nav-logo"
              alt="nav-logo"
            />
          </Link>
        </div>
        <Button variant="dark">
          <Link to="/snacks/new">New Snacks</Link>
        </Button>
      </nav>
    );
}


export default NavBar;