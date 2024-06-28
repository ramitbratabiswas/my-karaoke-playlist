import { useFetchUserPlaylists } from "../utils/fetchUserPlaylists.js";
import { Link } from "react-router-dom";

export default function UserPlaylists() {

  const userPlaylists = useFetchUserPlaylists();

  return (
    <div>
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