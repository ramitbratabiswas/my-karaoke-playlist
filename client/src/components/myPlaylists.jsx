import { useFetchMyPlaylists } from "../utils/fetchMyPlaylists.js";
import { Link } from "react-router-dom";
import { useFetchMyQueue } from "../utils/fetchMyQueue.js";
// import MyQueue from "./myQueue.jsx"
// import MyRecents from "./myRecents.jsx"
// import MyTopShort from "./myTopShort.jsx"
// import MyTopMedium from "./myTopMedium.jsx"
// import MyTopLong from "./myTopLong.jsx"

export default function MyPlaylists() {

  const userPlaylists = useFetchMyPlaylists();
  useFetchMyQueue();

  return (
    <div>
      <h1 className="list-heading" id="your-playlists-heading">Your playlists</h1>
      {/* <MyQueue />
      <MyRecents />
      <MyTopShort /> <MyTopMedium /> <MyTopLong /> */}
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