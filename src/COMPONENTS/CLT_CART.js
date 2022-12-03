import { useSelector } from 'react-redux';
import HELPER_PRINT_CHECKOUT from './HELPER_PRINT_CHECKOUT'
import { Link } from 'react-router-dom';
export default function CLT_CART() {
  const allProducts = useSelector((state) => state.products);
  return (
    <div>
     <Link to='/PRODUCTS' className='btn btn-primary btn-lg m-auto'>Back to Products</Link>
            <div>
              <div  className='display-5 text-dark text-center'>CART</div>
      {allProducts.map((product) => {
        if ('cart' === product.status) {
          
          return (
            <HELPER_PRINT_CHECKOUT
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
  )
}