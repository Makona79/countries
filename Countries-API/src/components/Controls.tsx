import { useState, useEffect } from 'react'
import Search from './Search'
import CustomSelect from './CustomSelect';


const Controls = ({ onSearch }: any) => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		// let regionValue = region?.value || '' ; 

		onSearch(search);
	}, [search])

	return (
		<form className='form'>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect />
		</form>
	)
}

export default Controls