import { Link } from "react-router-dom";
import querystring from 'querystring';

export default function Frontpage({ colorClass }) {



  return (
    <div className="frontpage-container">
      <div className="tagline"><h1 className="tagline-text">get lyrics for your favourite playlists!</h1></div>
      <div className="subtagline"><h1 className="subtagline-text"><Link to="/userplaylists"><span className="home-link link-1">log in to use your own playlists</span></Link>
      <br/>or<br/>
      <Link to="/spotifyplaylists"><span className="home-link link-2">try out some of spotify's most popular playlists</span></Link></h1></div>
    </div>
  );
}
