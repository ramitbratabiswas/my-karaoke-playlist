import { Route, Routes } from 'react-router-dom';

import Accordion from './components/accordion.jsx'
import Navbar from './components/navbar.jsx'
import SpotifyPlaylists from './components/spotifyPlaylists.jsx';
import UserPlaylists from './components/userPlaylists.jsx';
import { playlists } from './data/playlists.js';

import './assets/styles/main.css'

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/1" element={<SpotifyPlaylists />} />
        <Route path="/2" element={<UserPlaylists />} />
        <Route path="/3" element={<Accordion playlistId={playlists[0].id} />} />
      </Routes>
    </>
  );
}

export default App;
