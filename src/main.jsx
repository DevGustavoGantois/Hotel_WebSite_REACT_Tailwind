import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RoomProvider from './context/RoomContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RoomProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RoomProvider>,
)
