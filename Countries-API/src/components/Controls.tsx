import { useState, useEffect } from 'react'
import Search from './Search'
import CustomSelect, { OptionType } from './CustomSelect';

const Controls = ({ onSearch }: any) => {
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<OptionType | null>();
	console.log(region)
	useEffect(() => {
		const regionValue = region?.value || '';

		onSearch(search, regionValue);
	}, [search, region])

	return (
		<form className='form'>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect region={region} setRegion={setRegion} />
		</form>
	)
}

export default Controls