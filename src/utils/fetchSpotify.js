import { useState, useEffect } from "react";

const clientId = "392e275fa12640adbfad6a53c7c73965";
const clientSecret = "eb0b7bc72fbf4ea88d7541fbec74e452";
const tokenUrl = "https://accounts.spotify.com/api/token";

const globalTop50Id = "37i9dQZEVXbMDoHDwVN2tF";
const todaysTopHitsId = "37i9dQZF1DXcBWIGoYBM5M";
const kpopOn = "37i9dQZF1DX9tPFwDMOaN1";
const essentialIndie = "37i9dQZF1DX26DKvjp0s9M";
const playlistUrl = "https://api.spotify.com/v1/playlists";

export const useFetchSpotify = () => {

  const [token, setToken] = useState("");
  const [playlistData, setPlaylistData] = useState({});

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

  useEffect(() => {
    const fetchPlaylistData = async () => {
      if (!token) return null;

      try {
        const res = await fetch(`${playlistUrl}/${essentialIndie}/tracks`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await res.json();
        setPlaylistData(() => data.items.map((item, index) => {
          let songName = item.track.name;
          if (songName.toLowerCase().includes('(feat')) {
            let featIndex = songName.toLowerCase().indexOf('(feat');
            songName = songName.substring(0, featIndex-1);
          }
          return { id: index + 1, song: songName, artist: item.track.artists.map((artist) => artist.name) }
        }));

      } catch (error) {
        console.error(`catch clause error in fetchUserData: ${error}`);
      }
    }
    fetchPlaylistData();
  },[token]);

  return playlistData;
}