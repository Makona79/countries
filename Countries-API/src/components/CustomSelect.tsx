import React from 'react'
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select'

const options: OptionType[] = [
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
	region?: OptionType | null,
	// setRegion: (option: MultiValue<OptionType> | SingleValue<OptionType>) => void
	setRegion: any
}

const CustomSelect: React.FC<CustomSelectType> = ({ region, setRegion }) => {

	const customStyle: StylesConfig<OptionType> = {
		control: (base) => ({
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
		option: (base, state) => ({
			...base,
			cursor: 'pointer',
			color: 'var(--colors-text)',
			backgroundColor: state.isSelected
				? 'var(--colors-bg)'
				: 'var(--colors-ui-base)',
		}),
		singleValue: (base) => ({ ...base, color: 'var(--colors-text)' }),
		menu: (base) => ({ ...base, backgroundColor: 'transparent' }),
		menuList: (base) => ({
			...base, padding: '0',
			borderRadius: 'var(--radii)',
		}),
		input: (base) => ({ ...base, caretColor: 'transparent' })
	}

	const handleChange = (option: MultiValue<OptionType> | SingleValue<OptionType>) => {
		setRegion(option);
	};

	return (
		< Select options={options}
			placeholder="Filter by Region"
			onChange={handleChange}
			value={region}
			styles={customStyle}
		// menuIsOpen
		/>
	)
}

export default CustomSelect