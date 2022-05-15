import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatAIT3.css';

const WhatAIT3 = () => {
	return (
		<div className='ait3__whatait3 section__margin'>
			<div className='ait3__whitait3-feature'>
				<Feature />
			</div>
			<div className='ait3__whatait3-heading'>
				<h1 className='gradient-text'>
					The possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>
			<div className='ait3__whatait3__feature-container'>
				<Feature />
				<Feature />
				<Feature />
			</div>
		</div>
	);
};

export default WhatAIT3;
