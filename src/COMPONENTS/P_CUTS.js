import { useSelector } from 'react-redux';
import PRODUCT_HELPER from './HELPER_PRINT_PRODUCT';
export default function P_CUTS() {
  const stateProduct = useSelector((state) => state.products);
  return (
    <div id='CUTS'>
      <div className='cards'>
        <h2 className='card-header'>CUTS</h2>
        <hr style={{width:'50%',margin:'10px auto',height:'4px',backgroundColor:'#1DA1F2'}}/>
        <div className='services'>
          {stateProduct.map((product) => {
            if ('cuts' === product.type) {
              return (
                <PRODUCT_HELPER
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
                  price={Number(product.price)}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
