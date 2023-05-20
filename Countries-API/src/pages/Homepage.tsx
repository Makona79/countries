import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ALL_COUNTRIES } from '../config'
import List from '../components/List'
import Card from '../components/Card'
import Controls from '../components/Controls'

type FlagsType = {
	png: string,
	svg: string
}

export type CountriesType = {
	flags: FlagsType,
	name: string,
	population: number,
	region: string,
	capital: string
}
type HomePageProps = {
	countries: CountriesType[],
	setCountries: (v: CountriesType[]) => void
}

const Homepage: React.FC<HomePageProps> = ({ countries, setCountries }) => {
	const [filteredCountries, setFilteredCountries] = useState(countries);
	const navigate = useNavigate();


	const handleSearch = (search: string, region: string) => {
		let searchData = [...countries];
		if (region) {
			searchData = searchData.filter(c => c.region.includes(region))
		}
		if (search) {
			searchData = searchData.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
		}
		setFilteredCountries(searchData);
	}
	useEffect(() => {
		if (!countries.length) {
			axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
		}
	}, []);

	useEffect(() => {
		handleSearch('', '')
	}, [countries])

	return (
		<>
			<Controls onSearch={handleSearch} />
			<List>
				{filteredCountries.map((c) => {
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
						<Card key={c.name} {...countryInfo} onClick={() => navigate(`/country/${c.name}`)} />
					)
				})}
			</List>
		</>
	)
}

export default Homepage