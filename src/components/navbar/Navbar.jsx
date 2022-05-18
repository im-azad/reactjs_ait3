import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/lig.png';
import './navbar.css';

const Menu = () => (
	<>
		<p>
			<a href='#home'>Home</a>
		</p>
		<p>
			<a href='#ait3'>What is AIT?</a>
		</p>

		<p>
			<a href='#features'>Case Studies</a>
		</p>
		<p>
			<a href='#possibility'>Open AI</a>
		</p>
		<p>
			<a href='#blog'>LIbrary</a>
		</p>
	</>
);

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className='ait3__navbar'>
			<div className='ait3__navbar-logo'>
				<a href='index.html'>
					<img src={logo} alt='logo' />
				</a>
			</div>
			<div className='ait3__navbar-links'>
				<Menu />
			</div>
			<div className='ait__navbar-menu'>
				<div className='ait3__navbar-sign'>
					<p>Sign in</p>
					<button type='button'>Sign up</button>
				</div>
				<div className='ait3__navbar-menu_icon'>
					{toggleMenu ? (
						<RiCloseLine
							color='#fff'
							size={27}
							onClick={() => setToggleMenu(false)}
						/>
					) : (
						<RiMenu3Line
							color='#fff'
							size={27}
							onClick={() => setToggleMenu(true)}
						/>
					)}
					{toggleMenu && (
						<div className='ait3__navbar-menu_container scale-up-center'>
							<div className='ait3__navbar-menu_container-links'>
								{' '}
								<Menu />
								<div className='ait3__navbar-menu_container-links-sign ait3__navbar-sign'>
									<p>Sign in</p>
									<button type='button'>Sign up</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
