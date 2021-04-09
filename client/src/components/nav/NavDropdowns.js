import React, { useState } from 'react';
import Accessories from './navdropcontent/Accessories';
import Motorcycle from './navdropcontent/motorcycle/Motorcycle';
import NavItemCollapse from './NavItemCollapse';
import NavItemContent from './NavItemContent';

const NavDropdowns = () => {
	const [isOpen, setIsOpen] = useState(null);

	const handleToggle = (collapse) => {
		isOpen === collapse ? setIsOpen(null) : setIsOpen(collapse);
	};

	return (
		<div className='nav-dropdowns'>
			<button
				onClick={() => handleToggle('nav-motorcycle-collapse')}
				className='nav-dropdown-toggle'>
				<h3>Motorcycle</h3> <i className='fas fa-chevron-down'></i>
			</button>
			<NavItemCollapse
				isOpen={isOpen}
				id='nav-motorcycle-collapse'
				className={`nav-item-collapse nav-motorcycle-collapse`}
				timing='500'>
				<Motorcycle />
			</NavItemCollapse>

			<button
				onClick={() => handleToggle('nav-accessories-collapse')}
				className='nav-dropdown-toggle'>
				<h3>Accessories</h3> <i className='fas fa-chevron-down'></i>
			</button>
			<NavItemCollapse
				isOpen={isOpen}
				id='nav-accessories-collapse'
				className='nav-item-collapse nav-accessories-collapse'
				timing='500'>
				<Accessories />
			</NavItemCollapse>

			<a href='#!' className='nav-dropdown-toggle nav-clothing'>
				<h3>Clothing</h3> <i className='fas fa-chevron-down'></i>
			</a>

			<button
				onClick={() => handleToggle('nav-owners-collapse')}
				className='nav-dropdown-toggle'>
				<h3>Owners</h3> <i className='fas fa-chevron-down'></i>
			</button>
			<NavItemCollapse
				isOpen={isOpen}
				id='nav-owners-collapse'
				className='nav-item-collapse nav-owners-collapse'
				timing='500'>
				<NavItemContent />
			</NavItemCollapse>

			<button
				onClick={() => handleToggle('nav-inside-collapse')}
				className='nav-dropdown-toggle'>
				<h3>Inside Triumph</h3> <i className='fas fa-chevron-down'></i>
			</button>
			<NavItemCollapse
				isOpen={isOpen}
				id='nav-inside-collapse'
				className='nav-item-collapse nav-inside-collapse'
				timing='500'>
				<NavItemContent />
			</NavItemCollapse>
		</div>
	);
};

export default NavDropdowns;
