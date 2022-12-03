import { Link } from 'react-router-dom';
import HELPER_SCROLL from './HELPER_SCROLL';
import USER from '../ASSETS/USER.js';

function HEADER() {
	return (
		<nav id='navbar-client'>
			<span className='logo'>{HELPER_SCROLL('HOME', 'LOGO')}</span>
			<ul>
				<li>{HELPER_SCROLL('ABOUT', 'ABOUT US')}</li>
				<li>{HELPER_SCROLL('CONTACT', 'CONTACT US')}</li>
				<li>
					<Link to='/PRODUCTS'>PRODUCTS</Link>
				</li>
			</ul>
			<div className='login'>
				<Link to='/LOGIN'>{<USER />}</Link>
			</div>
		</nav>
	);
}
export default HEADER;
