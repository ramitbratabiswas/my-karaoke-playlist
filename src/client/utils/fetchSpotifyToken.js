import { useState, useEffect } from "react";

const clientId = "392e275fa12640adbfad6a53c7c73965";
const clientSecret = "eb0b7bc72fbf4ea88d7541fbec74e452";
const tokenUrl = "https://accounts.spotify.com/api/token";

export const useFetchSpotifyToken = () => {

  const [token, setToken] = useState("");

  useEffect(() => {

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
    fetchToken();
  },[]);

  return token;
}