import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        discoverMovies: null,
        trailerId: null,
    },
    reducers: {
        addDiscoverMovies: (state, action) => {
            state.discoverMovies = action.payload
        },
        addTrailerId: (state, action) => {
            state.trailerId = action.payload
        },
    },
})

export const { addDiscoverMovies, addTrailerId } = movieSlice.actions
export default movieSlice.reducer
