import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"

//Here create a global redux store using configureStore()
//What i interpreted is, into the store we can have multiple reducers right? so in configure store there's reducer object 
// which can contain multiple reducers...maybe from multiple slices to manage multiple state, 
// therefore in that we gave a key named "counter" which manages stuff for counter state and in that the reducer that 
// we imported from slice file we set it on to counter key
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

//Now if you remember when we created store in redux, we had to include reducers into the store right?
//So import the slice that you created in here

//export the created store
export default store