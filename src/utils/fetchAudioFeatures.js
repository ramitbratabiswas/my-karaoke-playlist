import { useState, useEffect } from "react";

const clientId = "392e275fa12640adbfad6a53c7c73965";
const clientSecret = "eb0b7bc72fbf4ea88d7541fbec74e452";
const tokenUrl = "https://accounts.spotify.com/api/token";

const audioFeaturesUrl = "https://api.spotify.com/v1/audio-features";

export const useFetchSpotify = () => {

  const [token, setToken] = useState("");
  const [audioFeatures, setAudioFeatures] = useState({});

  useEffect(() => {

  useEffect(() => {
    const fetchPlaylistData = async () => {
      if (!token) return null;

      try {
        const res = await fetch(`${playlistUrl}/37i9dQZF1Epvjzh6N0ZAcU/tracks`, {
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