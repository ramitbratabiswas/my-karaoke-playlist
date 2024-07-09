import { useState, useEffect } from "react";

export const useFetchMyQueue = () => {

  const [queueData, setQueueData] = useState({
    name: '',
    tracks: []
  });
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchMyQueue = async () => {
      if (!accessToken) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me/player/queue`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const data = await res.json();
        console.log(data.queue);
        const tracks = data.queue.map((item, index) => {
          let songName = item.name;
          let songId = item.id;
          let songImage = item.album.images[0].url;
          if (songName.toLowerCase().includes('(feat')) {
            let featIndex = songName.toLowerCase().indexOf('(feat');
            songName = songName.substring(0, featIndex - 1);
          }
          return { id: index + 1, song: songName, artist: item.artists.map((artist) => artist.name), trackId: songId, image: songImage }
        })
        
        setQueueData({
          name: "Queue",
          tracks: tracks
        });

      } catch (error) {
        console.error(`catch clause error in fetchMyPlaylists: ${error}`);
      }
    }
    fetchMyQueue();
  },[accessToken]);

  return queueData;
}