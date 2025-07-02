import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import appStore from './redux/appStore'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import { BrowserRouter, Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={appStore}>
            <App />
        </Provider>
    </StrictMode>,
)
