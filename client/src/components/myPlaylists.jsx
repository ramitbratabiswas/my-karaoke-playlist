import { useFetchMyPlaylists } from "../utils/fetchMyPlaylists.js";
import { Link } from "react-router-dom";

export default function MyPlaylists() {

  const userPlaylists = useFetchMyPlaylists();

  return (
    <div>
      <h1 className="list-heading" id="your-playlists-heading">my playlists</h1>
      <div className="playlistList">
        {userPlaylists.map((playlist, index) => {
          return (<>
            <Link key={index} id="userCard" className="playlistCards" to={`/lyrics/${playlist.id}`}>
              <div>
                <img className="playlist-image" src={playlist.imgUrl} />
                <p className="playlist-name">{playlist.name}</p>
                <p className="playlist-description">{playlist.description}</p>
              </div>
            </Link>
          </>);
        })}
      </div>
    </div>
  );
}