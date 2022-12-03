import { Link as LinkScroll } from 'react-scroll';
import ARROWUP from '../ASSETS/ARROWUP.js';

export default function HELPER_SCROLL(elementID, elementText) {
	let sample = [];
	if (elementText === 'BACKTOTOP') {
		sample = [
			<LinkScroll
				activeClass='active'
				to={elementID}
				spy={true}
				smooth={true}
				offset={-70}
				duration={200}
				key={elementID}
			>
				<ARROWUP />
			</LinkScroll>,
		];
	} else if (elementText === 'LOGO') {
		sample = [
			<LinkScroll
				activeClass='active'
				to={elementID}
				spy={true}
				smooth={true}
				offset={-70}
				duration={200}
				key={elementID}
			>
				<img
					src='./logo1.png'
					alt='logo'
					style={{ width: '50%' }}
				/>
			</LinkScroll>,
		];
	} else {
		sample = [
			<LinkScroll
				activeClass='active'
				to={elementID}
				spy={true}
				smooth={true}
				offset={-70}
				duration={200}
				key={elementID}
			>
				{elementText}
			</LinkScroll>,
		];
	}

	return sample;
}
