import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Controls from './components/Controls'
import Main from './components/Main'


function App() {


	return (
		<>
			<Header />
			<Main>
				<Controls />
			</Main>
		</>
	)
}

export default App
