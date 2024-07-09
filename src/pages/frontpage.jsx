import { Link } from "react-router-dom";
import { createAuthLink } from "../utils/createAuthLink";

export default function Frontpage() {

  const authLink = createAuthLink();
  console.log(authLink)

  return (
    <div className="frontpage-container">
      <div className="tagline"><h1 className="tagline-text">get lyrics for your favourite playlists!</h1></div>
      <div className="subtagline"><h1 className="subtagline-text"><a href={authLink}><span className="home-link link-1">log in to use your own music</span></a>
      <br/>or<br/>
      <Link to="/spotifyplaylists"><span className="home-link link-2">try out spotify's most popular playlists</span></Link></h1></div>
    </div>
  );
}
