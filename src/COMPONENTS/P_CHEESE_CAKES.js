import PRODUCT_HELPER from './HELPER_PRINT_PRODUCT';
import { useSelector } from 'react-redux';

export default function P_CHEESE_CAKES() {
  const stateProduct = useSelector((state) => state.products);
  return (
    <div
      id='CHEESE_CAKES'
    >
      <div className='cards'>
        <h2 className='card-header'>CHEESE CAKE</h2>
        <hr style={{width:'50%',margin:'10px auto',height:'4px',backgroundColor:'#1DA1F2'}}/>
        <div className='services'>
          {stateProduct.map((product) => {
            if ('cheese_cake' === product.type) {
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
