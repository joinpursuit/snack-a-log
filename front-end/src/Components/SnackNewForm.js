/** @format */

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
	let navigate = useNavigate();

	const addSnack = (newSnack) => {
		axios
			.post(`${API}/snacks`, newSnack)
			.then(
				() => {
					navigate(`/snacks`);
				},
				(error) => console.error(error)
			)
			.catch((c) => console.warn('catch', c));
	};

	const [snack, setSnack] = useState({
		name: '',
		fiber: '',
		protein: '',
		added_sugar: '',
		image_url: '',
	});

	const handleTextChange = (event) => {
		setSnack({ ...snack, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addSnack(snack);
	};

	return (
		<div className='New'>
			<h5>
				<span>Snack Health is determined by:</span>
			</h5>
			<ul>
				<li>protein is above 5</li>
				<li>
					<em>or</em> fiber is above 5
				</li>
				<li>
					<em>and</em> sugar is less than 5
				</li>
			</ul>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name:</label>
				<input
					id='name'
					value={snack.name}
					type='text'
					onChange={handleTextChange}
					placeholder='Name of Snack'
					required
				/>
				<label htmlFor='fiber'>Fiber:</label>
				<input
					id='fiber'
					value={snack.fiber}
					type='number'
					onChange={handleTextChange}
					placeholder='Fiber Amount'
				/>
				<label htmlFor='protein'>Protein:</label>
				<input
					id='protein'
					value={snack.protein}
					type='number'
					onChange={handleTextChange}
					placeholder='Protein Amount'
				/>
				<label htmlFor='added_sugar'>Added Sugar:</label>
				<input
					id='added_sugar'
					value={snack.added_sugar}
					type='number'
					onChange={handleTextChange}
					placeholder='Added Sugar Amount'
				/>
				<label htmlFor='image_url'>Image URL:</label>
				<input
					id='image_url'
					type='text'
					pattern='http[s]*://.+'
					value={snack.image_url}
					placeholder='http://'
					onChange={handleTextChange}
				/>
				<br />
				<input type='submit' />
			</form>
		</div>
	);
}

export default SnackNewForm;
