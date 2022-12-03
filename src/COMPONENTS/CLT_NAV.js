import scrollHelper from './HELPER_SCROLL';
import { Link } from 'react-router-dom';
import './style.css';
import CART from '../ASSETS/CART.js';
import USER from '../ASSETS/USER.js';

export default function CLIENT_NAV(props) {
	return (
		<>
			<nav id='navbar-client'>
				<div className='logo'>
					<Link to='/'>
						<img
							src='./logo1.png'
							alt='logo'
							style={{ width: '50%' }}
						/>
						{scrollHelper('HOME', '')}
					</Link>
				</div>
				<ul>
					<li>{scrollHelper('CAKES', 'CAKES')}</li>
					<li>{scrollHelper('CUTS', 'CUTS')}</li>
					<li>{scrollHelper('CHEESE_CAKES', 'CHEESE CAKES')}</li>
					<li>{scrollHelper('MINI_CHEESE_CAKES', 'MINI CHEESE CAKES')}</li>
					<li>{scrollHelper('BAKERY', 'SWEET BAKERY')}</li>
					<li>{scrollHelper('MUFFINS', 'MUFFINS')}</li>
				</ul>
				<div className='login-2'>
					<Link to='/LOGIN'>{<USER />}</Link>
				</div>
				{props.title === 'products' && (
					<div className='cart'>
						<Link to='/CART'>
							<CART />
						</Link>
					</div>
				)}
			</nav>
		</>
	);
}
