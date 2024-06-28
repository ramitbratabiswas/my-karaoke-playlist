import Accordion from './components/accordion.jsx'
import Navbar from './components/navbar.jsx'
import SpotifyPlaylists from './components/spotifyplaylists.jsx';
import UserPlaylists from './components/userPlaylists.jsx';
import { playlists } from './data/playlists.js';

export const App = () => {
  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <UserPlaylists />
      <SpotifyPlaylists />
    </>
  );
}

export default App;
