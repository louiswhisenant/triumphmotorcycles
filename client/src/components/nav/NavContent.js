import React, { useState } from 'react';
import NavDropdowns from './NavDropdowns';

const NavContent = () => {
	const [region, setRegion] = useState('USA');

	return (
		<div id='nav-content'>
			<NavDropdowns />

			<div className='slide-in-left'>
				<div className='nav-links'>
					<a className='nav-link nav-configure' href='#!'>
						Configure
					</a>
					<a className='nav-link nav-offers' href='#!'>
						Offers
					</a>
					<a className='nav-link nav-test-ride' href='#!'>
						Test Ride
					</a>
					<a className='nav-link nav-dealer' href='#!'>
						Dealer
					</a>
				</div>

				<div className='nav-region'>
					<a href='#!'>
						{' '}
						<i className='fas fa-globe-americas'></i>{' '}
						<span className='nav-current-region'>{region}</span>
						<i className='fas fa-chevron-down'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavContent;
