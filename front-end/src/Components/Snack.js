/** @format */

import { Link } from 'react-router-dom';
import regularHeart from '../assets/heart-regular.png';
import solidHeart from '../assets/heart-solid.png';
import noImage from '../assets/no-image.png';

function Snack({ snack, index }) {
	const imageDecider = snack.image_url ? (
		<img
			src={snack.image_url}
			alt='snack'
			width='100'
			height='106'
			className='snack-info-image'
		/>
	) : (
		<img
			src={noImage}
			alt='default'
			width='100'
			height='106'
			className='snack-info-image'
		/>
	);

	return (
		<Link to={`/snacks/${index}`}>
			<div className='snack-card'>
				<section>{imageDecider}</section>

				{snack.is_healthy ? (
					<span>
						<img src={solidHeart} alt='solid heart' width='25' height='25' />

						<p>{snack.name}</p>
					</span>
				) : (
					<span>
						<img
							src={regularHeart}
							alt='regular heart'
							width='25'
							height='25'
						/>
						<p>{snack.name}</p>
					</span>
				)}
			</div>
		</Link>
	);
}

export default Snack;
