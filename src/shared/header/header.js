import './header.css';
import { speakerOn } from '../../helpers/speaker';
import { useEffect, useState } from 'react';

const navigation = [
	{ name: 'cursos' },
	{ name: 'contacto' },
	{ name: 'seccion 3' },
	{ name: 'seccion cuatro' },
];

const Header = () => {
	const [position, setPosition] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			let moving = window.pageYOffset;
			setVisible(position > moving);
			setPosition(moving);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<nav
			className={`navbar fixed-top navbar-expand-lg navbar-light bg-light ${
				visible ? 'c-visible' : 'c-hidden'
			}`}
		>
			<span class='navbar-brand' href='#'>
				logo
			</span>

			<div class='collapse navbar-collapse' id='navbarNav'>
				<ul class='navbar-nav'>
					{navigation.map((item, i) => (
						<li class='nav-item active'>
							<a class='nav-link' href='#'>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div class='custom-control custom-switch'>
				<input
					type='checkbox'
					class='custom-control-input'
					id='customSwitch1'
				/>
				<label class='custom-control-label' for='customSwitch1'>
					activar voz
				</label>
			</div>
			<button
				class='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span class='navbar-toggler-icon'></span>
			</button>
		</nav>
	);
};

export default Header;
