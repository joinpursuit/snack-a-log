/** @format */

import { useState, useEffect } from 'react';
import Snack from './Snack';
import '../index.css';

// this is our new package for making API calls
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;
// Request for data must come AFTER component is loaded to the DOM otherwise we have a RACE condition - page might be done before data arrives;

function Snacks() {
	const [snacks, setSnacks] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/snacks`)
			.then((response) => {
				setSnacks(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div className='Snacks'>
			{snacks.map((snack, index) => {
				console.log(index);
				return <Snack key={snack.id} snack={snack} index={snack.id} />;
			})}
		</div>
	);
}

export default Snacks;
