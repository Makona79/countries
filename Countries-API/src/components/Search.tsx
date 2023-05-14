import React from 'react'
import { IoSearch } from 'react-icons/io5'

type SearchProps = {
	search: string,
	setSearch: (value: string) => void
}

const Search = ({ search, setSearch }: SearchProps) => {

	const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value) }

	return (
		<label className='form__label'>
			<IoSearch />
			<input type="text"
				onChange={searchHandle}
				value={search}
				className='form__input'
				placeholder='Search for a country...' />
		</label>
	)
}

export default Search