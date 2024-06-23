import { useState, useEffect } from "react";
import { useFetchSpotifyToken } from "./fetchSpotifyToken.js";

const globalTop50Id = "37i9dQZEVXbMDoHDwVN2tF";
const todaysTopHitsId = "37i9dQZF1DXcBWIGoYBM5M";
const kpopOn = "37i9dQZF1DX9tPFwDMOaN1";
const essentialIndie = "37i9dQZF1DX26DKvjp0s9M";
const playlistUrl = "https://api.spotify.com/v1/playlists";

export const useFetchPlaylistData = () => {

  const [playlistData, setPlaylistData] = useState([]);
  const token = useFetchSpotifyToken();

  useEffect(() => {
    const fetchPlaylistData = async () => {
      
      if (!token) return null;

      try {
        const res = await fetch(`${playlistUrl}/62dlyeJn7ZCFItWxsOK3bc/tracks`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        const data = await res.json();
        setPlaylistData(() => data.items.map((item, index) => {
          let songName = item.track.name;
          let songId = item.track.id;
          let songImage = item.track.album.images[0].url;
          if (songName.toLowerCase().includes('(feat')) {
            let featIndex = songName.toLowerCase().indexOf('(feat');
            songName = songName.substring(0, featIndex-1);
          }
          return { id: index + 1, song: songName, artist: item.track.artists.map((artist) => artist.name), trackId: songId, image: songImage }
        }));

      } catch (error) {
        console.error(`catch clause error in fetchUserData: ${error}`);
      }
    }
    fetchPlaylistData();
  },[token]);

  return playlistData;
}