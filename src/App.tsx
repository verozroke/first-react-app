import {Route, Routes, Link} from 'react-router-dom'
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';

function App() {
	return (
		<>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			`<Routes>
				<Route path='/' element={ <ProductPage/> }/>
				<Route path='/about' element={ <AboutPage/> }/>
			</Routes>`
		</>
	)
}

export default App;
