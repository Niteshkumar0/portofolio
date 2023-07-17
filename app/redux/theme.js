import {createSlice} from '@reduxjs/toolkit'


export let themeSlice = createSlice({
    name:'theme',
    initialState:{
        dark:false,
    },
    reducers:{
        forDarkTheme : (state) =>{
            if (!state.dark) {
                state.dark = true
            }else {
                state.dark = false;
            }
          
        },
        darkByAmount : (state,action) => {
            state.dark += action.payload
        }
    }
})

export let {forDarkTheme,darkByAmount} = themeSlice.actions
export default themeSlice.reducer;