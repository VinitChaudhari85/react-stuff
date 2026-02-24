// useSelector lets us READ data from Redux store.
// useDispatch lets us SEND actions to Redux store.
import { useSelector, useDispatch } from "react-redux";

// Import the action creators we exported from slice.
import { increment, decrement } from "./store/counterSlice";

function App() {

  // STEP 1: Read data from Redux store.
  // state = entire global state
  // state.counter = slice
  // state.counter.counter = actual value
  const counterValue = useSelector(state => state.counter.counter);


  // STEP 2: Get dispatch function.
  // dispatch is how we send actions to Redux.
  const dispatch = useDispatch();


  return (
    <div>

      {/* Display current Redux state */}
      <h1>Counter: {counterValue}</h1>

      {/* When clicked:
          1) increment() creates an action object
          2) dispatch sends it to Redux
          3) reducer runs
          4) state updates
          5) useSelector detects change
          6) component re-renders automatically
      */}
      <button onClick={() => dispatch(increment())}>
        Increase
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrease
      </button>

    </div>
  );
}

export default App;