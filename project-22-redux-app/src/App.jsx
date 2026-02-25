// React hooks
import { useEffect } from "react";

// Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Counter actions
import { increment, decrement } from "./store/counterSlice";

// Theme actions
import { darkModeOff, darkModeOn } from "./store/themeSlice";

// Async thunk action
import { fetchProducts } from "./store/productsSlice";

function App() {

  // Dispatch function to send actions to Redux
  const dispatch = useDispatch();


  // ---------------- COUNTER STATE ----------------
  // Reading counter state from Redux store
  const counterValue = useSelector((state) => state.counter.counter);


  // ---------------- THEME STATE ----------------
  // Reading theme state from Redux store
  const background = useSelector((state) => state.theme.darkmode);


  // ---------------- PRODUCTS STATE ----------------
  // Reading async Redux states
  const products = useSelector((state) => state.products.items);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);


  // ---------------- ASYNC CALL ----------------
  // When component loads:
  // dispatch(fetchProducts())
  // ↓
  // thunk runs API call
  // ↓
  // Redux dispatches:
  // pending → fulfilled → rejected
  // ↓
  // extraReducers update state
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  // ---------------- UI CONDITIONS ----------------
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;


  // ---------------- MAIN UI ----------------
  return (
    <div className={background ? `bg-black text-white min-h-screen` : `bg-white text-black min-h-screen`}>

      {/* COUNTER SECTION */}
      <h1>Counter: {counterValue}</h1>

      <button onClick={() => dispatch(increment())}>
        Increase
      </button>

      <button onClick={() => dispatch(decrement(5))}>
        Decrease
      </button>


      {/* THEME CONTROLS */}
      <div>
        <button onClick={() => dispatch(darkModeOn())}>Go Dark</button>
        <button onClick={() => dispatch(darkModeOff())}>Go Light</button>
      </div>


      {/* PRODUCTS SECTION */}
      <h2>Products</h2>

      <div>
        {products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </div>

    </div>
  );
}

export default App;