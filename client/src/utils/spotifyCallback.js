import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const tokenUrl = "https://accounts.spotify.com/api/token";
const redirectUri = "http://localhost:5173/callback"; // Your redirect URI

const useSpotifyAuthCallback = () => {
  const location = useLocation();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get("code");
      const state = params.get("state");
      const storedState = localStorage.getItem("spotify_auth_state");

      if (state === null || state !== storedState) {
        console.error("State mismatch or missing state.");
        return;
      }

      localStorage.removeItem("spotify_auth_state");

      try {
        const res = await fetch(tokenUrl, {
          method: "POST",
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(`${clientId}:${clientSecret}`)
          },
          body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`
        });

        const data = await res.json();
        if (data.access_token) {
          localStorage.setItem("spotifyAccessToken", data.access_token);
          localStorage.setItem("spotifyRefreshToken", data.refresh_token);
          // Set token to state or context
        }
      } catch (error) {
        console.error(`Error in handleAuthCallback: ${error}`);
      }
    };

    handleAuthCallback();
  }, [location]);

  return null;
};