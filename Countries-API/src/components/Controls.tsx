import { useState } from 'react'
import Search from './Search'
import CustomSelect from './CustomSelect';


const Controls = () => {
	const [search, setSearch] = useState('');


	return (
		<form className='form'>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect />
		</form>
	)
}

export default Controls