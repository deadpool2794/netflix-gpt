export const APP_LOGO = 'https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'
export const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie'
export const YOUTUBE = 'https://www.youtube.com/embed/'
export const POSTER_URL = 'https://image.tmdb.org/t/p/w200/'
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_ACCESS_TOKEN,
    },
}
