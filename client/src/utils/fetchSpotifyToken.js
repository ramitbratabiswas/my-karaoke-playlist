import { useState, useEffect } from "react";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
const tokenUrl = "https://accounts.spotify.com/api/token";

export const useFetchSpotifyToken = () => {

  const [token, setToken] = useState("");

  const fetchToken = async () => {
    try {
      const res = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
      });

      const data = await res.json();
      setToken(() => data.access_token);
    } catch (error) {
      console.error(`catch clause error in fetchToken: ${error}`);
    }
  }

  useEffect(() => {

    fetchToken();

  }, []);

  return token;
}