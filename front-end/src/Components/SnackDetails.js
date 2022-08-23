/** @format */

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import regularHeart from '../assets/heart-regular.png';
import solidHeart from '../assets/heart-solid.png';
import noImage from '../assets/no-image.png';

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
	const [snack, setSnack] = useState({});
	let { index } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`${API}/snacks/${index}`)
			.then((response) => {
				setSnack(response.data);
			})
			.catch((c) => {
				console.error('catch', c);
			});
	}, [index, navigate, API]);

	const deleteSnack = () => {
		axios
			.delete(`${API}/snacks/${index}`)
			.then(() => {
				navigate(`/snacks`);
			})
			.catch((c) => console.error('catch', c));
	};

	const handleDelete = () => {
		deleteSnack();
	};

	const imageDecider = snack.image_url ? (
		<img src={snack.image_url} alt='snack' width='292' height='300' />
	) : (
		<img src={noImage} alt='default' width='292' height='300' />
	);

	return (
		<article>
			<h3>
				{snack.is_healthy ? (
					<span>
						<h4>This snack is healthy!</h4>
						<img src={solidHeart} alt='solid heart' />{' '}
					</span>
				) : (
					<span>
						<img src={regularHeart} alt='regular heart' />{' '}
						<h4>This snack is unhealthy!</h4>
					</span>
				)}{' '}
			</h3>
			<h3>{snack.name}</h3>
			<h5>
				<span>{imageDecider}</span>
			</h5>
			<h6>Fiber: {snack.fiber}</h6>
			<h6>Protein: {snack.protein}</h6>
			<h6>Added Sugar: {snack.added_sugar}</h6>

			<div className='showNavigation'>
				<div>
					{' '}
					<Link to={`/snacks`}>
						<button>Back</button>
					</Link>
				</div>
				<div>
					<Link to={`/snacks/${index}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<div>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</div>
		</article>
	);
}

export default SnackDetails;
