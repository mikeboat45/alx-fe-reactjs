import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import ErrorPage from './error-page'

export default function App() {
	return (
		<>
			<nav>
				<ul>
					<li><Link to='./Home'>Home</Link></li>
					<li><Link to="./About">About</Link></li>
					<li><Link to="./Services">Services</Link></li>
          			<li><Link to="./Contact">Contact</Link></li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
        		<Route path="/About" element={<About />} />
				<Route path="/Services" element={<Services />} />
        		<Route path="/Contact" element={<Contact />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);

}

