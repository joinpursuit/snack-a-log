import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

const NavBar = () => {
    return (
       <nav>
      <h1>
        <Link to="/snacks">Snack Log</Link>
      </h1>
      <Button variant="outline-primary" >
        <Link to="/snacks/new">New Snacks</Link>
      </Button>
    </nav>
  );
}


export default NavBar;