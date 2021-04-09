import React from 'react';

const BikeCategory = ({ id, title, children }) => {
	return (
		<div id={id} className='nav-bike-category'>
			<a href='#!'>
				{title} <i className='fas fa-chevron-right'></i>
				<hr />
			</a>
			{children}
		</div>
	);
};

export default BikeCategory;
