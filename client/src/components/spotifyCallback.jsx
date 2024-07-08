import { useLocation } from "react-router-dom";
import { useFetchRefreshToken } from "../utils/fetchRefreshToken";
import { useEffect } from "react";

export default function SpotifyCallback() {
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const state = queryParams.get('state');

  const { accessToken, refreshToken, expiresIn, loading, error } = useFetchRefreshToken(code, state);

  useEffect(() => {
    if (!loading && !error) {
      console.log(`Access Token: ${accessToken}`);
      console.log(`Refresh Token: ${refreshToken}`);
      console.log(`Expires In: ${expiresIn}`);
    } else if (error) {
      console.error(`Error: ${error}`);
    }
  }, [loading, error, accessToken, refreshToken, expiresIn]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Spotify Callback</h1>
      <p>Access Token: {accessToken}</p>
      <p>Refresh Token: {refreshToken}</p>
      <p>Expires In: {expiresIn}</p>
    </div>
  );
}
