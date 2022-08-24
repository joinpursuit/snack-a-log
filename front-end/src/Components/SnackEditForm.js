/** @format */

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
	let { index } = useParams();
	let navigate = useNavigate();

	const [snack, setSnack] = useState({
		name: '',
		fiber: '',
		protein: '',
		added_sugar: '',
		image_url: '',
	});

	useEffect(() => {
		axios
			.get(`${API}/snacks/${index}`)
			.then((response) => setSnack(response.data))
			.catch((error) => console.log(error));
	}, [index]);

	const updateSnack = (updatedSnack) => {
		axios
			.put(`${API}/snacks/${index}`, updatedSnack)
			.then(() => {
				navigate(`/snacks/${index}`);
			})
			.catch((error) => console.error(error));
	};

	const handleTextChange = (event) => {
		setSnack({ ...snack, [event.target.id]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(snack);
		updateSnack(snack, index);
	};

	return (
		<div className='Edit'>
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
					type='text'
					onChange={handleTextChange}
					placeholder='Fiber Amount'
					required
				/>
				<label htmlFor='protein'>Protein:</label>
				<input
					id='protein'
					value={snack.protein}
					type='text'
					onChange={handleTextChange}
					placeholder='Protein Amount'
					required
				/>
				<label htmlFor='added_sugar'>Added Sugar:</label>
				<input
					id='added_sugar'
					value={snack.added_sugar}
					type='text'
					onChange={handleTextChange}
					placeholder='Added Sugar Amount'
					required
				/>
				<label htmlFor='image_url'>Image URL:</label>
				<input
					id='image_url'
					type='url'
					pattern='http[s]*://.+'
					value={snack.image_url}
					placeholder='http://'
					onChange={handleTextChange}
				/>
				<br />
				<input type='submit' />
			</form>
			<Link to={`/snacks/${index}`}>
				<button>Back</button>
			</Link>
		</div>
	);
}

export default SnackEditForm;
