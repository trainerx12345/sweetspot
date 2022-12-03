import db from '../ASSETS/db.json';

const initialState = {
  products: db.products, //[getProduct()],
  users: db.users,
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // ADD TO CART LOGIC
    case 'CART':
      return addToCart(state, payload);
    case 'SUMMARY':
      return summaryItem(state, payload);

    // PRODUCT ADMIN
    case 'ADD':
      return {
        ...state,
        products: [...state.products, { uid: payload.uid, status: 'cart' }],
      };
    case 'UPDATE':
      return { ...state, ...payload };

    case 'DELETE':
      return deleteProduct(state, payload);

    // CHECKOUT PAGE
    case 'BUY':
      return { ...state, ...payload };
    case 'UNDO':

      return deleteItemFromCart(state, payload);
    default:
      return state;
  }
}

// FUNCTION HANDLER FOR ADD TO CART
function addToCart(state, payload) {
  console.log('cart')
  const cartItem = state.products.map((item) => {
    if (item.uid === payload.uid) {
      let temp = { ...item };
      temp.status = 'cart';
      return temp;
    } else {
      return item;
    }
  });
  console.log(cartItem)
  return { ...state, products: [...cartItem] };
}

// FUNCTION HANDLER FOR ADD TO CART
function summaryItem(state, payload) {
  const summarizeItem = state.products.map((item) => {
    if (item.uid === payload.uid) {
      let temp = { ...item };
      temp.status = 'summary';
      temp.quantity =+ 1;
      return temp;
    } else {
      return item;
    }
  });
  return { ...state, products: [...summarizeItem] };
}

// FUNCTION HANDLER FOR DELETING A CART ITEM
function deleteItemFromCart(state, payload) {
  const undoItems = state.products.map((item) => {
    if (item.uid === payload.uid) {
      let temp = { ...item };
      temp.status = 'stock';
      temp.quantity = 0;
      return temp;
    } else {
      return item;
    }
  });
  return { ...state, products: [...undoItems] };
}

// FUNCTION HANDLER FOR DELETING A PRODUCT
function deleteProduct(state, payload) {
  return {
    ...state,
    products: state.products.filter((item) => item.uid !== payload.uid),
  };
}
export default reducer;
