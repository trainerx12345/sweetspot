import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import HELPER_PRINT_ORDER from './HELPER_PRINT_ORDER';
export default function CLT_PRODUCT_SUMMARY() {
  const allProducts = useSelector((state) => state.products);
  return (
    <div>
     {/* <CLT_NAV title='summary' /> */}
     <Link to='/PRODUCTS' className='btn btn-primary btn-lg m-auto'>Back to Products</Link>
            <div>
            <div  className='display-5 text-dark text-center'>PRODUCT SUMMARY</div>
      {allProducts.map((product) => {
        if ('summary' === product.status) {
          return (
            <HELPER_PRINT_ORDER
              uid={product.uid}
              key={product.uid}
              name={product.name}
              description={product.description}
              ingredients={product.ingredients}
              allergens={product.allergens}
              dimension={product.dimension}
              radius={product.radius}
              weight={product.weight}
              type={product.type}
              image={product.image}
              image_big={product.image_big}
              status={product.status}
              quantity={product.quantity}
              />
              );
            } else {
              return null;
            }
          })}
          </div>

    </div>
  );
}
