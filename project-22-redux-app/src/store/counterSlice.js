import { createSlice } from "@reduxjs/toolkit"

//decide the state you want to manage first, and create an initial state of it.
const initialState = { counter: 0 }

//Now we want to create a slice right?
//so create a slice using createSlice()
//Now the slice requires 3 things: name, initial state, reducers

//THIS RIGHT HERE IS OUR REDUCER ACTUALLY AND REDUCER TAKES ACTIONS AND STATE IF YOU REMEMBER 
//SO GIVE INITIAL STATE AND ACTIONS INSIDE, NAME IS GIVEN TO TOOLKIT FOR...WHATEVER IT DOES
const counterSlice = createSlice({

    //This is our slice name
    name: "counter",
    initialState,
    reducers:{

        //THESE ARE OUR ACTIONS HERE

        //whichever reducers/actions that you create inside this area will automatically get the current state by redux toolkit
        //Now we want functions/actions for incrementing and decrementing the counter state
        increment(state){
            //This is done immutably by toolkit
            state.counter++
        },
        decrement(state){
            //This is done immutably by toolkit
            state.counter--
        }
    }
})

//Now take and export the reducers/actions that you created
export const { increment, decrement } = counterSlice.actions


//THIS IS THE OBJECT THAT WE CREATED, CONTAINING NAME, INITIALSTATE, REDUCERS,
export default counterSlice.reducer