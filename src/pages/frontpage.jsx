import { createAuthLink } from "../utils/createAuthLink";

export default function Frontpage() {

  const authLink = createAuthLink();
  console.log(authLink);

  return (
    <div className="frontpage-container">
      <div className="overlay"></div>
      <div className="tagline"><h1 className="tagline-text">get lyrics for your favourite playlists!</h1></div>
      <div className="subtagline"><h1 className="subtagline-text"><a href={authLink}><span className="home-link link-1">log in to spotify to get started!</span></a></h1></div>
    </div>
  );
}
