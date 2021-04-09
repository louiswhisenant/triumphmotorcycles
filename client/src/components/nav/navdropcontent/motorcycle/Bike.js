import React from 'react';

const Bike = ({ id, img, imgPlaceholder, name, priceFrom }) => {
	return (
		<a href='#!' id={id} className='nav-bike'>
			<div className='bike-media'>
				{!img ? (
					<div>{imgPlaceholder}</div>
				) : (
					<img src={img} alt={name} className='bike-img' />
				)}
			</div>
			<div className='bike-info'>
				<h4 className='bike-info-name'>{name}</h4>
				<p className='bike-info-price'>
					Price from: <span>${priceFrom}</span>
				</p>
			</div>
		</a>
	);
};

export default Bike;
