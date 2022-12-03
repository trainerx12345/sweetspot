import HERO from '../COMPONENTS/HM_HERO.js';
import ABOUT from '../COMPONENTS/HM_ABOUT.js';
import CONTACT from '../COMPONENTS/HM_CONTACT.js';
import FOOTER from '../COMPONENTS/FOOTER.js';
import HELPER_SCROLL from '../COMPONENTS/HELPER_SCROLL';
import { Link } from 'react-router-dom';
import HEADER from '../COMPONENTS/HEADER.js';

const HOME = () => {
	return (
		<div>
			<HEADER />
			<HERO />
			<ABOUT />
			<CONTACT />
			<FOOTER />
			<div className='arrowup'>{HELPER_SCROLL('HOME', 'BACKTOTOP')}</div>
		</div>
	);
};
export default HOME;
