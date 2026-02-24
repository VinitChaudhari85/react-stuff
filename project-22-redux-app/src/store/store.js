// configureStore creates the Redux store.
// It replaces old createStore from plain Redux.

import { configureStore } from "@reduxjs/toolkit";

// Import the reducer from our slice.
import counterReducer from "./counterSlice";


// STEP 1: Create the global store.
// The reducer object can contain multiple slices.
// Each key becomes a top-level key in global state.
const store = configureStore({
  reducer: {
    // This means:
    // state.counter → handled by counterReducer
    counter: counterReducer
  }
});

// STEP 2: Export the store.
// Provider in main.jsx needs this.
export default store;