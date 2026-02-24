// We import createSlice from Redux Toolkit.
// createSlice helps us create:
// 1) initial state
// 2) reducer functions
// 3) action creators
// all in one place (less boilerplate than old Redux)

import { createSlice } from "@reduxjs/toolkit";


// STEP 1: Define the initial state for this slice.
// This is the part of global state this slice controls.
const initialState = {
  counter: 0
};


// STEP 2: Create the slice.
// A slice represents ONE piece of global state.
const counterSlice = createSlice({
  
  // name is used internally by Redux (for debugging & action types)
  name: "counter",

  // attach the initial state
  initialState,

  // reducers define HOW state changes
  // These are pure state update functions.
  reducers: {

    // increment reducer
    // When this runs, Redux Toolkit gives us current state.
    // We "mutate" it, but Immer safely handles immutability behind the scenes.
    increment(state) {
      state.counter++;
    },

    // decrement reducer
    decrement(state) {
      state.counter--;
    }

  }
});


// STEP 3: Export the auto-generated action creators.
// These are functions like increment() and decrement()
// which we will dispatch inside React components.
export const { increment, decrement } = counterSlice.actions;


// STEP 4: Export the reducer so the store can use it.
export default counterSlice.reducer;