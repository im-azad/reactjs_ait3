import React from 'react';
import {
	Header,
	Blog,
	Possibility,
	Features,
	WhatAIT3,
	Footer,
} from './containers';
import { Navbar, Brand, CTA } from './components';
import './App.css';
import './index.css';

function App() {
	return (
		<div className='App'>
			<div className='gradient_bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatAIT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
