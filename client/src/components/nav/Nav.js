import React, { useEffect, useState, useRef } from 'react';
import NavContent from './NavContent';
import triumphNameLogo from '../../assets/img/triumph-name-logo.png';
import menuIcon from '../../assets/img/menu.svg';

const Nav = () => {
	const navRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [collapsing, setCollapsing] = useState('hide');

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const clickListener = (e) => {
		if (navRef.current && navRef.current.contains(e.target)) {
			return;
		}

		setIsOpen(false);
	};

	// Nav animation
	useEffect(() => {
		if (!isOpen) {
			setCollapsing('hide');
			const timeout = setTimeout(() => {
				setCollapsing('');
			}, 50);

			return () => clearTimeout(timeout);
		}
	}, [isOpen]);

	// hide nav on page load
	useEffect(() => {
		const timeout = setTimeout(() => {
			document.querySelector('.nav-collapse').style.display = null;
		}, 50);

		return () => clearTimeout(timeout);
	}, []);

	// Nav off-click
	useEffect(() => {
		document.addEventListener('click', clickListener);

		return () => {
			document.removeEventListener('click', clickListener);
		};
	}, []);

	return (
		<div id='nav' ref={navRef} className='nav'>
			<button onClick={handleToggle} className='nav-toggle'>
				<i
					className={`fas fa-ellipsis-v ${
						isOpen ? 'show' : collapsing
					}`}></i>
			</button>
			<div className='nav-brand'>
				<img className='nav-brand-logo' src={triumphNameLogo} alt='' />
			</div>

			<div
				className={`nav-collapse ${isOpen ? 'show' : collapsing}`}
				style={{ display: 'none' }}>
				<NavContent />
			</div>
		</div>
	);
};

export default Nav;
