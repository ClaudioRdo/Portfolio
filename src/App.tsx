import React from 'react';
import './styles/app.scss'
import { About, Contact, Home, Projects, Skills } from './pages';

function App() {
	return (
		<div className="App">
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
