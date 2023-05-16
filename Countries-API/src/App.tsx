import { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'
import Controls from './components/Controls'
import Main from './components/Main'
import axios from 'axios'
import { ALL_COUNTRIES } from './config'
import List from './components/List'
import Card from './components/Card'

type CountriesType = {
	flags: any,
	name: string,
	population: string,
	region: string,
	capital: string
}

function App() {
	const [countries, setCountries] = useState<CountriesType[]>([]);
	console.log(countries);

	useEffect(() => {
		axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
	}, [])

	return (
		<>
			<Header />
			<Main>
				<Controls />
				<List>
					{countries.map((c) => {
						const countryInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: 'Population',
									description: c.population.toLocaleString()
								},
								{
									title: 'Region',
									description: c.region
								},
								{
									title: 'Capital',
									description: c.capital
								},
							]
						};
						return (
							<Card key={c.name} {...countryInfo} />
						)
					})}
				</List>
			</Main>
		</>
	)
}

export default App
