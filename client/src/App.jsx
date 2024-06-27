import Accordion from './components/accordion.jsx'
import Navbar from './components/navbar.jsx'
import SpotifyPlaylists from './components/spotifyplaylists.jsx';

export const App = () => {
  return (
    <>
      <div className='navbar'>
        <Navbar />
      </div>
      <SpotifyPlaylists />
      <div className='accordion'>
        <Accordion />
      </div>
    </>
  );
}

export default App;
