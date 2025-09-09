import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './components/Contact'
import Services from './Services'
import ErrorPage from './error-page'
import Navbar from './components/Navbar'

export default function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Home" element={<Home />} />
        		<Route path="/About" element={<About />} />
				<Route path="/Services" element={<Services />} />
        		<Route path="/components/Contact" element={<Contact />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	);

}

