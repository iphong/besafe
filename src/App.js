import { Router } from '@reach/router'
import React from 'react'

import God from './components/God'
import Home from './components/Home'

function App() {
	return (
		<>
			<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
			      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
			      crossOrigin="anonymous" />
			<Router>
				<Home path="/*"/>
				<God path="/god"/>
			</Router>
		</>
	)
}

export default App
