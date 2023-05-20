import { useState, useEffect } from 'react'
import Search from './Search'
import CustomSelect, { OptionType } from './CustomSelect';

type ControlsType = {
	onSearch: (search: string, regionValue: string) => void
}

const Controls: React.FC<ControlsType> = ({ onSearch }) => {
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState<OptionType | null>();

	useEffect(() => {
		const regionValue = region?.value || '';

		onSearch(search, regionValue);
		// eslint-disable-next-line
	}, [search, region])

	return (
		<form className='form'>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect region={region} setRegion={setRegion} />
		</form>
	)
}

export default Controls