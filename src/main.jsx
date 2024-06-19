import React from 'react'
import ReactDOM from 'react-dom/client'
import Accordion from './components/accordion/index.jsx'
import './components/accordion/styles.css';

// import { getLyrics, getSong } from 'genius-lyrics-api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='header'>
      <h1>my karaoke playlist!</h1>
      <h2>music by spotify, lyrics by musixmatch</h2>
    </div>
    <Accordion />
  </React.StrictMode>,
)
