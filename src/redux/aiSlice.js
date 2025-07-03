import { createSlice } from '@reduxjs/toolkit'

const aiSlice = createSlice({
    name: 'ai',
    initialState: false,
    reducers: {
        toggleAI: (state) => {
            return !state
        },
    },
})

export const { toggleAI } = aiSlice.actions
export default aiSlice.reducer
