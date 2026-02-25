import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null
};

//Async thunk automatically creates three actions for us: 
// products/fetchProducts/pending
// products/fetchProducts/fulfilled
// products/fetchProducts/rejecteed
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }
)


//Note here that the actions created by async thunk are created outside of reducer, so we have to put them in extra reducers
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    // builder helps us register these outside created actions
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true
            state.error = null
        }).addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false
            state.items = action.payload
        }).addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false
            state.error = "Failed to fetch the products."
        })
    }
})

export default productsSlice.reducer


//By createAsyncThunk, we just created a function called fetchProducts which can be dispatched like" dispatch(fetchProducts())