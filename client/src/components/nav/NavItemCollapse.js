import React, { useState, useEffect } from 'react';

const NavItemCollapse = ({ id, className, isOpen, timing, children }) => {
	const [active, setActive] = useState('');

	useEffect(() => {
		if (isOpen === id) {
			setActive('show');
		} else {
			active === 'show' && setActive('hide');
			const clearActive = setTimeout(() => {
				setActive('');
			}, timing);

			return () => {
				clearTimeout(clearActive);
			};
		}
	}, [isOpen, id, timing]);

	// useEffect(() => {
	// 	isOpen === id ? setActive('show') : setActive('hide');
	// });

	return <div className={`${className} ${active}`}>{children}</div>;
};

export default NavItemCollapse;
