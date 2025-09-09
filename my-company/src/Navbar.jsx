import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar() {
	return (
		<nav>
			<Link to='./Home' className='nav-link'>Home</Link>
			<Link to="./About" className='nav-link'>About</Link>
			<Link to="./Services" className='nav-link'>Services</Link>
          	<Link to="./Contact" className='nav-link'>Contact</Link>
		</nav>
	);
}
