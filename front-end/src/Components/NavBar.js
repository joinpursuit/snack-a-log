import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="NavBar">
            <h1>
                <Link to="/snacks">
                    Snacks
                </Link>
            </h1>
            <button>
                <Link to="/snacks/new">
                    New Snack
                </Link>
            </button>

        </div>
    )
}

export default NavBar;