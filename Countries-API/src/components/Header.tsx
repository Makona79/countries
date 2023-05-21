import { useEffect, useState } from 'react'
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = () => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<header className='header'>
			<div className='container'>
				<div className="header__wrapper">
					<Link to="/countries-dev/" className='title-link'>
						<h2 className="title">Where is the world?</h2>
					</Link>
					<div className="modeswitcher" onClick={toggleTheme}>
						{theme === 'light' ? (
							<IoMoonOutline />
						) : (
							<IoMoon />
						)}
						{theme} Theme
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header