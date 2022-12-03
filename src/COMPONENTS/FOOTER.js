import { Link } from 'react-router-dom';
import HELPER_SCROLL from './HELPER_SCROLL';
const FOOTER = () => {
	return (
		<div id='FOOTER'>
			<footer className='site-footer pt-5'>
				<div className='container pt-5'>
					<div className='row'>
						<div className='col-sm-12 col-md-6'>
							<h2 className='display-6 font-monospace'>
								SWEETSPOT
								<span className='logo'>{HELPER_SCROLL('HOME', 'LOGO')}</span>
							</h2>
							<p className='text-justify col-12  col-md-12 col-sm-12'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
								expedita modi facere dolores, amet commodi ipsam voluptatibus a
								mollitia voluptatum quis possimus. Voluptatibus officiis nisi,
								saepe incidunt autem quis voluptate. Consequuntur asperiores
								cupiditate eligendi aperiam natus deserunt possimus! A,
								perferendis! Corporis eum dignissimos aliquid soluta ea nihil
								suscipit voluptatibus, deleniti quod! Maiores aliquam ullam
								rerum aspernatur saepe quod mollitia blanditiis!
							</p>
						</div>
					</div>
					<hr />
					<div className='row'>
						<div className='col-md-8 col-sm-6 col-xs-12'>
							<h5>Privacy &mdash; Terms</h5>
							<p className='copyright-text'>
								Copyright &copy; 2022 All Rights Reserved by
								<a href='#'>trainerX123</a>.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
export default FOOTER;
