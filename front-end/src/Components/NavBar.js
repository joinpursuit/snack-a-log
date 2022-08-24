/** @format */

import { Link } from 'react-router-dom';
// import starTrekLogo from '../images/star-trek-logo.jpeg';

export default function NavBar() {
	return (
		<nav>
			<h1>
				<Link className='nav-a' to='/snacks'>
					Snack-a-Log
				</Link>
			</h1>

			<button className='nav-btn'>
				<Link to='/snacks/new'>New Snack</Link>
			</button>
		</nav>
	);
}
