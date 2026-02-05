import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx';
import CartContextProvider from './store/shopping-cart-context.jsx';

function App() {
  
  return (
    // <CartContext.Provider value={ctxValue}>
    <CartContextProvider>
      <Header
        // cart={shoppingCart}
        // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    {/* </CartContext.Provider> */}
    </CartContextProvider>
  );
}

export default App;
