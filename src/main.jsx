import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {storeCounter} from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={storeCounter} >
    <App />
    </Provider>
  
)
