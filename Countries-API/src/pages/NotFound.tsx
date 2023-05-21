import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<div>
			<Link to="/" className='title-link'>
				<h2 className="title">Where is the world?</h2>
			</Link>
		</div>
	)
}

export default NotFound