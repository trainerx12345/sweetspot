import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {
	Sheet,
	Header,
	Content,
	Footer,
	detents,
	Portal,
} from 'react-sheet-slide';
import 'react-sheet-slide/style.css';
import CONVERT from './HELPER_CONVERTER';

export default function HELPER_PRINT_PRODUCT(props) {
	const [stateProduct, setStateProduct] = useState(props.uid);
	const allProducts = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const imageRef = useRef();

	return (
		<div className='content'>
			<h2>{props.name.toUpperCase()}</h2>
			<div onClick={() => setOpen(true)}>
				<img
					src={props.image}
					alt={props.name}
				/>
			</div>
			<div className='mx-auto d-inline-block'>
				{<CONVERT price={props.price} />}
			</div>
			<Link
				to='/SUMMARY'
				onClick={orderHandler}
			>
				Buy
			</Link>
			<div className='dialog'>
				<Portal>
					<Sheet
						ref={imageRef}
						open={open}
						onDismiss={() => setOpen(false)}
						onClose={() => {
							// setOpen(false);
						}}
						selectedDetent={detents.large}
						detents={(props) => [detents.large(props), detents.medium(props)]}
						useDarkMode={false}
						useModal={true}
						scrollingExpands={true}
					>
						<Header>
							<div className='modal-header'>
								<h5
									className='modal-title'
									id='exampleModalLabel'
								>
									{props.name.toUpperCase()}
								</h5>
								<button
									type='button'
									data-dismiss='modal'
									aria-label='Close'
									className='btn btn-danger close'
									onClick={() => setOpen(false)}
								>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
						</Header>
						<Content>
							<div className='p-5'>
								<div className='d-flex justify-content-center p-2 m-5'>
									<img
										src={props.image_big}
										alt={props.name}
										style={{ width: '100%' }}
									/>
								</div>
								<div
									className='accordion accordion-flush'
									id='accordionFlushExample'
								>
									<div className='accordion-item'>
										<h2
											className='accordion-header'
											id='flush-headingOne'
										>
											<button
												className='accordion-button '
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#flush-collapseOne'
												aria-expanded='true'
												aria-controls='flush-collapseOne'
											>
												Product Description :
											</button>
										</h2>
										<div
											id='flush-collapseOne'
											className='accordion-collapse collapse show'
											aria-labelledby='flush-headingOne'
											data-bs-parent='#accordionFlushExample'
										>
											<div className='accordion-body'>
												<div>
													<p>{props.description}</p>
												</div>

												<div>
													<p className='fw-bold'>Allergens:</p>
													<p>{props.allergens}</p>
												</div>

												<div>
													<p className='fw-bold'>
														Dimensions X Weight X Radius:
													</p>
													<p>
														{props.dimension}&nbsp;" &nbsp; {props.radius}
														&nbsp;"&nbsp;{props.weight}&nbsp;g
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className='accordion-item'>
										<h2
											className='accordion-header'
											id='flush-headingTwo'
										>
											<button
												className='accordion-button collapsed'
												type='button'
												data-bs-toggle='collapse'
												data-bs-target='#flush-collapseTwo'
												aria-expanded='false'
												aria-controls='flush-collapseTwo'
											>
												Ingredients:
											</button>
										</h2>
										<div
											id='flush-collapseTwo'
											className='accordion-collapse collapse'
											aria-labelledby='flush-headingTwo'
											data-bs-parent='#accordionFlushExample'
										>
											<div className='accordion-body'>{props.ingredients}</div>
										</div>
									</div>
								</div>
							</div>
						</Content>
						<Footer className='modal-footer '>
							<div className='text-center pt-2 mx-5'>
								<div
									type='button'
									className='btn btn-danger mx-4'
									data-dismiss='modal'
									onClick={() => setOpen(false)}
								>
									Close
								</div>
								<Link
									to='/SUMMARY'
									onClick={buyNow}
									type='button'
									className='btn btn-primary mx-4'
								>
									Buy
								</Link>
							</div>
						</Footer>
					</Sheet>
				</Portal>
			</div>
		</div>
	);
	function buyNow() {
		setOpen(false);
		orderHandler();
	}
	function orderHandler() {
		dispatch({ type: 'SUMMARY', payload: { uid: stateProduct } });
	}

	function deleteItem() {
		dispatch({ type: 'UNDO', payload: { uid: stateProduct } });
	}
}
