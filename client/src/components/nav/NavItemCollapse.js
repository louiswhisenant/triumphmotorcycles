import React, { useState, useEffect, useRef } from 'react';

const NavItemCollapse = ({ id, className, isOpen, timing, children }) => {
	const [active, setActive] = useState('');
	const content = useRef(null);

	useEffect(() => {
		console.log(content.current.scrollHeight);
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
	}, [isOpen, id, active, timing]);

	return (
		<div
			className={`${className} ${active}`}
			style={
				isOpen === id
					? { height: content.current.scrollHeight }
					: { height: '0px' }
			}
			ref={content}>
			{children}
		</div>
	);
};

export default NavItemCollapse;
