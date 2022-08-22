import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <nav>
                <Link to='/' className='Snack_a_thon'>Snack-a-thon</Link>
                <button className='snackButton'><Link to='/snacks'>Snacks</Link></button>
                <button className='newButton'><Link to='/snacks/new'>New Snacks</Link> </button>
            </nav>
        </div>
    )
}
