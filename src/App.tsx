import React from 'react';
import './styles/app.scss'
import { About, Contact, Home, Projects, Skills } from './pages';
import { Navbar } from './components';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
