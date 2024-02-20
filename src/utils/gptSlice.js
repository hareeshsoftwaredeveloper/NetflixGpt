import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptResults:null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch=!state.showGptSearch
        },

        gptResults: (state, action) => {
            state.gptResults=action.payload
        }
    }
})

export const {toggleGptSearchView, gptResults}=gptSlice.actions

export default gptSlice.reducer