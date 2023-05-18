import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ALL_COUNTRIES } from '../config'
import List from '../components/List'
import Card from '../components/Card'
import Controls from '../components/Controls'

export type CountriesType = {
	flags: any,
	name: string,
	population: string,
	region: string,
	capital: string
}
// type HomePageProps = {
// 	countries:CountriesType,

// }

const Homepage = ({ countries, setCountries }: any) => {
	const [filteredCountries, setFilteredCountries] = useState(countries);
	const navigate = useNavigate();

	const handleSearch = (search: any, region: any) => {
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
				{filteredCountries.map((c: any) => {
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