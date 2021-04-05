import React, { useState } from 'react';
import NavItemCollapse from '../NavItemCollapse';

const Motorcycle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div id='motorcycle'>
			<button
				onClick={handleToggle}
				style={{ color: isOpen && '#a32424' }}
				className='select-a-range-toggle'>
				SELECT A RANGE{' '}
				{!isOpen ? (
					<i className='fas fa-plus'></i>
				) : (
					<i className='fas fa-minus'></i>
				)}
			</button>
			<NavItemCollapse
				isOpen={isOpen}
				id={true}
				className={`nav-item-collapse select-a-range`}
				timing='500'>
				<ul>
					<li>
						<button>ROADSTERS &amp; SUPERSPORTS</button>
					</li>
					<li>
						<button>ADVENTURE</button>
					</li>
					<li>
						<button>MODERN CLASSICS</button>
					</li>
					<li>
						<button>ROCKET 3</button>
					</li>
					<li>
						<button>TRIUMPH FACTORY CUSTOM</button>
					</li>
					<li>
						<button>E-BIKE</button>
					</li>
				</ul>
			</NavItemCollapse>
		</div>
	);
};

export default Motorcycle;
