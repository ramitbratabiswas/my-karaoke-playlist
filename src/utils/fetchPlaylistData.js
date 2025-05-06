import { useState, useEffect } from "react";

export const useFetchPlaylistData = (id) => {
  const [playlistData, setPlaylistData] = useState({
    name: '',
    tracks: []
  });

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchPlaylistData = async () => {
      if (!token || !id) return;

      try {
        // 1. Fetch metadata (name + total track count)
        const playlistRes = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const playlistInfo = await playlistRes.json();

        const totalTracks = playlistInfo.tracks.total;
        const playlistName = playlistInfo.name;
        const limit = 100;
        const pageCount = Math.ceil(totalTracks / limit);

        // 2. Fetch all pages concurrently
        const pagePromises = Array.from({ length: pageCount }, (_, i) => {
          const offset = i * limit;
          return fetch(
            `https://api.spotify.com/v1/playlists/${id}/tracks?offset=${offset}&limit=${limit}`,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          ).then(res => res.json());
        });

        const pagesData = await Promise.all(pagePromises);

        // 3. Flatten and parse all track items
        const allTracks = pagesData.flatMap((data, i) =>
          data.items
            .filter(item => item.track)
            .map((item, j) => {
              let songName = item.track.name;
              const songId = item.track.id;
              const songImage = item.track.album?.images?.[0]?.url || '';
              
              if (songName.toLowerCase().includes('(feat')) {
                const featIndex = songName.toLowerCase().indexOf('(feat');
                songName = songName.substring(0, featIndex - 1);
              }

              return {
                id: i * limit + j + 1,
                song: songName,
                artist: item.track.artists.map((a) => a.name),
                trackId: songId,
                image: songImage
              };
            })
        );

        // 4. Update state
        setPlaylistData({
          name: playlistName,
          tracks: allTracks
        });

      } catch (error) {
        console.error(`Error in fetchPlaylistData: ${error}`);
      }
    };

    fetchPlaylistData();
  }, [token, id]);

  return playlistData;
};