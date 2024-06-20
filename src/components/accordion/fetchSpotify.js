import { useState, useEffect } from "react";

const clientId = "392e275fa12640adbfad6a53c7c73965";
const clientSecret = "eb0b7bc72fbf4ea88d7541fbec74e452";
const apiUrl = "https://accounts.spotify.com/api/token";

export const useFetchSpotify = () => {

  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("starting useFetchLyrics");
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    }).then(res => {
      return res.json();
    }).then(data => {
      setToken(() => data.access_token);
      console.log("token inside useFetchSpotify: " + data.access_token);
    }).catch((error) => {
      console.error("error: " + error);
    })
  },[]);

  return token;
}