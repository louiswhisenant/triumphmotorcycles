import React, { Fragment } from 'react';
import './assets/css/main.css';
import Jumbotron from './components/Jumbotron';
import Nav from './components/nav/Nav';

function App() {
	return (
		<Fragment>
			<Nav />
			<Jumbotron />
		</Fragment>
	);
}

export default App;
