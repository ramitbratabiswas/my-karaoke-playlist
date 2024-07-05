import { Link } from "react-router-dom";

export default function Frontpage({ colorClass }) {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <h1><li><Link to="/userplaylists">My playlists</Link></li></h1>
        <h1><li><Link to="/spotifyplaylists">Spotify top playlists</Link></li></h1>
      </ul>
    </div>
  );
}
