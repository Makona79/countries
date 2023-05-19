import React from 'react'
import Select from 'react-select'

const options = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
];

export type OptionType = {
	value: string,
	label: string
}

type CustomSelectType = {
	region: OptionType | null,
	setRegion: (value: OptionType) => void
}

const CustomSelect = ({ region, setRegion }: CustomSelectType) => {

	const customStyle = {
		control: (base: any) => ({
			...base,
			backgroundColor: 'var(--colors-ui-base)',
			color: 'var(--colors-text)',
			borderRadius: 'var(--radii)',
			padding: '0.25rem',
			border: 'none',
			boxShadow: 'var(--shadow)',
			height: '50px',
			width: '200px',
		}),
		option: (base: any, state: any) => ({
			...base,
			cursor: 'pointer',
			color: 'var(--colors-text)',
			backgroundColor: state.isSelected
				? 'var(--colors-bg)'
				: 'var(--colors-ui-base)',
		}),
		singleValue: (base: any) => ({ ...base, color: 'var(--colors-text)' }),
		menu: (base: any) => ({ ...base, backgroundColor: 'transparent' }),
		menuList: (base: any) => ({
			...base, padding: '0',
			borderRadius: 'var(--radii)',
		}),
		input: (base: any) => ({ ...base, caretColor: 'transparent' }),

	}

	return (
		< Select options={options}
			placeholder="Filter by Region"
			onChange={(option: any) => setRegion(option)}
			value={region}
			styles={customStyle}
		// menuIsOpen
		/>
	)
}

export default CustomSelect