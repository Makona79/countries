import { useState } from 'react'
import Search from './Search'

const Controls = () => {
	const [search, setSearch] = useState('');
	
	return (
		<form className='form'>
			<Search search={search} setSearch={setSearch} />
		</form>
	)
}

export default Controls