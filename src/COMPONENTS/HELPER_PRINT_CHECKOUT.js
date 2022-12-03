import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HELPER_PRINT_CHECKOUT(props) {
  const [stateProduct, setStateProduct] = useState(props.uid);
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <section className='  p-5 p-lg-5 p-md-5 overflow-hidden '>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-md-6 col-lg-5 col-xl-4 p-2 m-5 '>
            <img
              src={props.image_big}
              alt={props.name}
              style={{ width: '100%' }}
            />
          </div>
          <div
            className='accordion accordion-flush col-md-9 col-lg-8 col-xl-5 offset-xl-1 bg-glass-2 card my-md-2 p-5'
            id='accordionFlushExample'
          >
            <p className='display-5 text-primary' id='exampleModalLabel'>
              {props.name.toUpperCase()}
            </p>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-headingOne'>
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
                    <p className='fw-bold'>Dimensions X Weight X Radius:</p>
                    <p>
                      {props.dimension}&nbsp;" &nbsp; {props.radius}
                      &nbsp;"&nbsp;{props.weight}&nbsp;g
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-headingTwo'>
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
            <div className='text-center text-lg-start mt-auto pt-2 mx-5'>
              <div
                type='button'
                className='btn btn-danger btn-lg mx-4'
                onClick={deleteOrder}
              >
             <i className="fa fa-trash" aria-hidden="true"></i>&nbsp; Delete
              </div>
  
              <Link
                to='/CART'
                type='button'
                className='btn btn-primary btn-lg'
                onClick={checkoutOrder}
              >
            <i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp; Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  function deleteOrder() {
    dispatch({ type: 'UNDO', payload: { uid: stateProduct } });
  }
  function checkoutOrder() {
    dispatch({ type: 'CART', payload: { uid: stateProduct } });
  }
  
}
