import React from 'react';
import ait3Logo from '../../assets/lig.png';
import './footer.css';

const Footer = () => {
	return (
		<div className='ait3__footer section__padding'>
			<div className='ait3__footer-heading'>
				<h2 className='gradient__text'>
					Do you want to step in to the future before others
				</h2>
			</div>
			<div className='ait3__footer-btn'>
				<a href='index.html'>Request Early Access</a>
			</div>

			<div className='ait3__footer-links'>
				<div className='ait3__footer-links_logo'>
					<a href='index.html'>
						<img src={ait3Logo} alt='logo' />
					</a>
					<p>
						Worked by sitting DHAKA BANGLADESH, A.K AZAD All Rights
						Reserved
					</p>
				</div>
				<div className='ait3__footer-links_div'>
					<h4>Links</h4>
					<a href='index.html'>Over Ons</a>
					<a href='index.html'>Social Media</a>
					<a href='index.html'>Counters</a>
					<a href='index.html'>Contact</a>
				</div>
				<div className='ait3__footer-links_div'>
					<h4>Company</h4>
					<p>Terms & Conditions</p>
					<p>Privacy Policy</p>
					<a href='index.html'>Contact</a>
				</div>
				<div className='ait3__footer-links_div'>
					<h4>Get in touch</h4>
					<p>Crechterwoord K12 182 DK Alknjkcb</p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</div>
			</div>
			<div className='ait3__footer-copyright'>
				<p>© 2022 AIT-3. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
