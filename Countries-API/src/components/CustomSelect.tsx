import React, { useState } from 'react'
import Select from 'react-select'

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
];
type Option = {
	value: string,
	label: string
}

const CustomSelect = () => {
	const [region, setRegion] = useState<Option | null>();

	return (
		< Select options={options}
			placeholder="Filter by Region"
			onChange={(newValue) => setRegion(newValue)}
			value={region}
		/>
	)
}

export default CustomSelect