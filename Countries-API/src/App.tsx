import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import './App.css'
import Main from './components/Main'
import Homepage, { CountriesType } from './pages/Homepage';
import Detailes from './pages/Detailes';
import NotFound from './pages/NotFound';

function App() {
	const [countries, setCountries] = useState<CountriesType[]>([]);


	return (
		<>
			<Header />
			<Main>
				<Routes>
					<Route path="/countries-dev/" element={<Homepage countries={countries} setCountries={setCountries} />} />
					<Route path="/countries-dev/country/:name" element={<Detailes />} />
					<Route path="/countries-dev/*" element={<NotFound />} />
				</Routes>

			</Main>
		</>
	)
}

export default App
