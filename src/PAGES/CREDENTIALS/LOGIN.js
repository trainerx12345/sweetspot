import SIGNUP from './REGISTER';
import { Link } from 'react-router-dom';
import scrollHelper from '../../COMPONENTS/HELPER_SCROLL';
function Login() {
	return (
		<section className='  p-5 p-lg-5 p-md-5 background-gradient-custom overflow-hidden '>
			<div className='row d-flex justify-content-center align-items-center h-100'>
				<div className='col-md-9 col-lg-6 col-xl-5'>
					<img
						src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
						className='img-fluid'
						alt='Sampleimage'
					/>
				</div>
				<div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 bg-glass-2 card my-md-2 p-5'>
					<div className='col-4  mx-auto d-block '>
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
						<h2 className='mx-auto d-block text-lg-center '>LOGIN</h2>
						{/*<!-- Email input -->*/}
						<div className='form-outline mb-4'>
							<label className='form-label'>Email address</label>
							<input
								type='email'
								id='EMAIL'
								className='form-control form-control-lg'
								placeholder='Enter a valid email address'
							/>
						</div>

						{/*<!-- Password input -->*/}
						<div className='form-outline mb-3'>
							<label className='form-label'>Password</label>
							<input
								type='password'
								id='PASSWORD'
								className='form-control form-control-lg'
								placeholder='Enter password'
							/>
						</div>

						<div className='text-center text-lg-start mt-4 pt-2'>
							<Link
								to='/PRODUCTS'
								type='button'
								className='btn btn-primary btn-lg'
							>
								Login
							</Link>

							<p className='small fw-bold mt-2 pt-1 mb-0'>
								Don't have an account?
								<Link
									to='/REGISTER'
									className='text-danger'
								>
									Register
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Login;
