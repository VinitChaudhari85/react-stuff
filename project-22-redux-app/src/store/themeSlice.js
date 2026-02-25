import { createSlice } from "@reduxjs/toolkit";

//we want to manage state for theme, soo
const initialTheme = { darkmode: false }

const themeSlice = createSlice({
    name: "theme",
    initialState: initialTheme,
    reducers: {
        darkModeOn(state){
            state.darkmode = true
        },
        darkModeOff(state){
            state.darkmode = false
        }
    }
})

export const { darkModeOn, darkModeOff } = themeSlice.actions

export default themeSlice.reducer