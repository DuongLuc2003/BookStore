import React from 'react'
import ReactDOM from 'react-dom/client'
import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "framer-motion"
import App from './App.tsx'
import './App.css';
import './index.css'
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify'
import { store }from './store/store.tsx'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
    <App />
  </Provider>,
)
