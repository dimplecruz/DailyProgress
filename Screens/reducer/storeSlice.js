import { createSlice } from '@reduxjs/toolkit'

export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        habitlist:[]
    },
    reducers: {
        ADD: (state, action) => {
            state.habitlist = action.payload
        },
        DELETE: (state, action) => {
            const idToDelete = action.payload;
            state.habitlist = state.habitlist.filter((habit) => habit.id !== idToDelete);
        }
    },
    
    
})

// Action creators are generated for each case reducer function
export const { ADD, DELETE } = storeSlice.actions

export default storeSlice.reducer