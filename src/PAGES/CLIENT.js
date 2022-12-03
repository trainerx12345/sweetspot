import CLT_NAV from '../COMPONENTS/CLT_NAV.js';
import P_CAKES from '../COMPONENTS/P_CAKES.js';
import P_CUTS from '../COMPONENTS/P_CUTS.js';
import P_CHEESE_CAKES from '../COMPONENTS/P_CHEESE_CAKES.js';
import P_MINI_CHEESE_CAKES from '../COMPONENTS/P_MINI_CHEESE_CAKES.js';
import P_SWEET_BAKERY from '../COMPONENTS/P_SWEET_BAKERY.js';
import P_MUFFINS from '../COMPONENTS/P_MUFFINS.js';
import CLT_FOOTER from '../COMPONENTS/CLT_FOOTER.js';
const CLIENT = () => {
	return (
		<>
			<div style={{ minHeight: '100vh' }}>
				<CLT_NAV title='products' />
				<div id='PRODUCTS'>
					<P_CAKES />
					<P_CUTS />
					<P_CHEESE_CAKES />
					<P_MINI_CHEESE_CAKES />
					<P_SWEET_BAKERY />
					<P_MUFFINS />
				</div>
				<CLT_FOOTER />
			</div>
		</>
	);
};
export default CLIENT;
