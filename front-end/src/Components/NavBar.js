/** @format */

import { Link } from 'react-router-dom';
// import starTrekLogo from '../images/star-trek-logo.jpeg';

export default function NavBar() {
	return (
		<nav>
			<Link to='/'>
				{/* <img
					src={starTrekLogo}
					alt='star trek logo'
					width='50px'
					height='50px'
				/> */}
			</Link>
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
