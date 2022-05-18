import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, text }) => {
	return (
		<div className='ait3__blog-container_article'>
			<div className='ait3__blog-container_article-image'>
				<img src={imgUrl} alt='blog' />
			</div>
			<div className='ait3__blog-container_article-content'>
				<div className='ait3__blog-container_article-content_heading'>
					<p className='post-date'>{date}</p>
					<h3>{title}</h3>
					<p>{text}</p>
				</div>
				<a
					href='index.html'
					className='ait3__blog-container_article-content_btn'
				>
					Read Full Article
				</a>
			</div>
		</div>
	);
};

export default Article;
