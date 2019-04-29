import React from 'react'
import { Router } from "@reach/router"

import God from './components/God'
import Home from './components/Home'

function App() {
	return (
		<Router>
			<Home path="/" />
			<God path="/god" />
		</Router>
	)
}

export default App
