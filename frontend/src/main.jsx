import React from 'react'
import ReactDOM from 'react-dom/client'

import CardProvider from './context/CardProvider';

import App from './App.jsx'
import './index.css'
import MainLayout from './layouts/MainLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <CardProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CardProvider>
)
