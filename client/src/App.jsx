import { Route, Routes } from 'react-router-dom';

import Accordion from './components/accordion.jsx'
import Navbar from './components/navbar.jsx'
import SpotifyPlaylists from './components/spotifyPlaylists.jsx';
import UserPlaylists from './components/userPlaylists.jsx';
import { playlists } from './data/playlists.js';

import './assets/styles/main.css'
import Frontpage from './pages/frontpage.jsx';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/spotifyplaylists" element={<SpotifyPlaylists />} />
        <Route path="/userplaylists" element={<UserPlaylists />} />
        <Route path="/lyrics/:id" element={<Accordion />} />
      </Routes>
    </>
  );
}

export default App;
