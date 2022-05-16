import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatAIT3.css';

const WhatAIT3 = () => {
	return (
		<div className='ait3__whatait3 section__margin' id='ait3'>
			<div className='ait3__whitait3-feature'>
				<Feature
					title='What is AIT-3'
					text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
				/>
			</div>
			<div className='ait3__whatait3-heading'>
				<h1 className='gradient__text'>
					The possibilities are beyond your imagination
				</h1>
				<p>
					<a href='index.html'>Explore The Library</a>
				</p>
			</div>
			<div className='ait3__whatait3__feature-container'>
				<Feature
					title='Chatbots'
					text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. Always open Whole front do of plate heard oh ought.'
				/>
				<Feature
					title='Knowledgebase'
					text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.We so opinion friends me message as delight. '
				/>
				<Feature
					title='Education'
					text='At jointure ladyship an insisted so humanity he. We so opinion friends me message as delight. Friendly bachelor entrance to on by. As put impossible own apartments.'
				/>
			</div>
		</div>
	);
};

export default WhatAIT3;
