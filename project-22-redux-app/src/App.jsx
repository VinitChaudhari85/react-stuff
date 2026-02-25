// useSelector lets us READ data from Redux store.
// useDispatch lets us SEND actions to Redux store.
import { useSelector, useDispatch } from "react-redux";

// Import the action creators we exported from slice.
import { increment, decrement } from "./store/counterSlice";
import { darkModeOff, darkModeOn } from "./store/themeSlice";

function App() {
  // STEP 1: Read data from Redux store.
  // state = entire global state
  // state.counter = slice
  // state.counter.counter = actual value
  const counterValue = useSelector((state) => state.counter.counter);

  // STEP 2: Get dispatch function.
  // dispatch is how we send actions to Redux.
  const dispatch = useDispatch();

  const background = useSelector((state) => state.theme.darkmode);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        background ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/10">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 tracking-tight">
          Redux Counter
        </h1>

        {/* Counter Display */}
        <div className="text-center mb-8">
          <p className="text-sm opacity-70 mb-2">Current Value</p>
          <h2 className="text-5xl font-extrabold">{counterValue}</h2>
        </div>

        {/* Counter Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => dispatch(increment())}
            className="flex-1 bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-md"
          >
            Increase
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="flex-1 bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-md"
          >
            Decrease
          </button>
        </div>

        {/* Theme Section */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-sm opacity-70 mb-4">Theme Controls</p>

          <div className="flex gap-4">
            <button
              onClick={() => dispatch(darkModeOn())}
              className="flex-1 bg-gray-800 hover:bg-black active:scale-95 transition-all duration-200 text-white font-semibold py-2 rounded-lg"
            >
              Dark Mode
            </button>

            <button
              onClick={() => dispatch(darkModeOff())}
              className="flex-1 bg-gray-200 hover:bg-gray-300 active:scale-95 transition-all duration-200 text-gray-900 font-semibold py-2 rounded-lg"
            >
              Light Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
