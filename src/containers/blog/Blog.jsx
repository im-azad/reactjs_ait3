import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const blogData = [
	{
		title: 'Improving end distrusts instantly ',
		imgUrl: blog01,
		date: '20 May 2022',
		text: 'From they fine john he give of rich he. They age and draw mrs like. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a literature from 45 BCImproving end distrusts may instantly was household applauded.',
	},
	{
		title: 'Become the tended They age and draw mrs like.',
		date: '20 May 2022',
		imgUrl: blog02,
		text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
	},
	{
		title: 'Message or am Lorem Ipsum is not simply.',
		imgUrl: blog03,
		date: '20 May 2022',
		text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
	},
	{
		title: 'Really boy law county  aaa',
		imgUrl: blog04,
		date: '20 May 2022',
		text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
	},
	{
		title: 'They age and draw mrs like Really boy.',
		imgUrl: blog05,
		date: '20 May 2022',
		text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
	},
];

const Blog = () => {
	return (
		<div className='ait3__blog section__padding' id='blog'>
			<div className='ait3__blog-heading'>
				<h1 className='gradient__text'>
					A lot is happening, <br /> We are blogging about it.
				</h1>
			</div>
			<div className='ait3__blog-container'>
				<div className='ait3__blog-container_groupB'>
					{blogData.map((item, index) => (
						<Article
							key={index}
							imgUrl={item.imgUrl}
							date={item.date}
							title={item.title}
							text={item.text}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Blog;
