import { useState } from 'react';
import { Link } from 'react-router-dom';
import scrollHelper from '../../COMPONENTS/HELPER_SCROLL';
export default function REGISTER() {
	return (
		<section className='background-radial-gradient overflow-hidden'>
			<div className='container px-4 py-5 px-md-5 text-center text-lg-start my-5'>
				<div className='row gx-lg-5 align-items-center mb-5'>
					<div
						className='col-lg-6 mb-5 mb-lg-0'
						style={{ zIndex: '10' }}
					>
						<h1
							className='my-5 display-5 fw-bold ls-tight'
							style={{ color: 'hsl(218, 81%, 95%)' }}
						>
							Be the best <br />
							<span style={{ color: 'hsl(218, 81%, 75%)' }}>
								SweetSpot got you!
							</span>
						</h1>
						<p
							className='mb-4 opacity-70'
							style={{ color: 'hsl(218, 81%, 85%)' }}
						>
							A slice of heaven
							<br />
							From our hearts to yours
							<br />
							They will make you smile
							<br />
							The Royal taste is here to stay!
						</p>
					</div>

					<div className='col-lg-6 mb-5 mb-lg-0 position-relative'>
						<div
							id='radius-shape-1'
							className='position-absolute rounded-circle shadow-5-strong'
						></div>
						<div
							id='radius-shape-2'
							className='position-absolute shadow-5-strong'
						></div>

						<div className='card bg-glass'>
							<div className='card-body px-4 py-5 px-md-5'>
								<div className='mx-auto d-block col-3 '>
									<Link to='/'>
										<img
											src='./logo1.png'
											alt='logo'
											className='img-fluid '
										/>
										{scrollHelper('HOME', '')}
									</Link>
								</div>
								<form>
									<div className='row'>
										<h2 className='mx-auto d-block text-lg-center '>SIGN UP</h2>
										<div className='col-md-6 mb-4'>
											<div className='form-outline'>
												<input
													type='text'
													id='form3Example1'
													className='form-control'
												/>
												<label className='form-label'>First name</label>
											</div>
										</div>
										<div className='col-md-6 mb-4'>
											<div className='form-outline'>
												<input
													type='text'
													id='form3Example2'
													className='form-control'
												/>
												<label className='form-label'>Last name</label>
											</div>
										</div>
									</div>

									<div className='form-outline mb-4'>
										<input
											type='email'
											id='form3Example3'
											className='form-control'
										/>
										<label className='form-label'>Email address</label>
									</div>

									<div className='form-outline mb-4'>
										<input
											type='password'
											id='form3Example4'
											className='form-control'
										/>
										<label className='form-label'>Password</label>
									</div>

									<Link
										to='/PRODUCTS'
										type='submit'
										className='btn btn-primary btn-block mb-4'
									>
										Sign up
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
