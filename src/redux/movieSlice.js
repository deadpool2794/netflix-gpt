import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        discoverMovies: null,
        trailerId: null,
        nowPlaying: null,
        popular: null,
        trending: null,
    },
    reducers: {
        addDiscoverMovies: (state, action) => {
            state.discoverMovies = action.payload
        },

        addNowPlayingMovies: (state, action) => {
            state.nowPlaying = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popular = action.payload
        },
        addTrendingMovies: (state, action) => {
            state.trending = action.payload
        },
        addTrailerId: (state, action) => {
            state.trailerId = action.payload
        },
    },
})

export const { addDiscoverMovies, addNowPlayingMovies, addPopularMovies, addTrendingMovies, addTrailerId } =
    movieSlice.actions
export default movieSlice.reducer
