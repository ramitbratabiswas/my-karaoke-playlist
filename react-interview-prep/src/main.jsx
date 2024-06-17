import React from 'react'
import ReactDOM from 'react-dom/client'
import { data } from './components/accordion/data.js'
import Accordion from './components/accordion/index.jsx'
import './components/accordion/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Accordion/>
  </React.StrictMode>,
)
