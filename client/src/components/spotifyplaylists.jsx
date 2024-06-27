import { playlists } from "../data/playlists";

export default function SpotifyPlaylists() {
  
  return (
    <div className="wrapper">
      <div className="playlistList">
        {playlists.map((playlist, index) => {
            return (<div key={index} className="playlistNames">{playlist.name}</div>);
          })}
      </div>
    </div>
  );
}