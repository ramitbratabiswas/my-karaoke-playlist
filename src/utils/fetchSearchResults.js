import { useState, useEffect } from "react";

export const useFetchSearchResults = (searchTerm) => {
  const [searchData, setSearchData] = useState({
    name: 'search',
    data: []
  });

  const accessToken = localStorage.getItem("access_token");
  const query = encodeURIComponent(searchTerm);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!accessToken || !searchTerm) return;

      try {
        const res = await fetch(
          `https://api.spotify.com/v1/search?q=${query}&type=track&limit=50`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );

        const data = await res.json();

        const tracks = data.tracks?.items?.map((item, index) => {
          let songName = item.name;
          const trackId = item.id;
          const songImage = item.album?.images?.[0]?.url || '';
          
          if (songName.toLowerCase().includes('(feat')) {
            const featIndex = songName.toLowerCase().indexOf('(feat');
            songName = songName.substring(0, featIndex - 1);
          }

          return {
            id: index + 1,
            song: songName,
            artist: item.artists.map((a) => a.name),
            trackId: trackId,
            image: songImage
          };
        }) || [];

        setSearchData({
          name: "search",
          data
        });

      } catch (error) {
        console.error(`Error in fetchSearchResults: ${error}`);
      }
    };

    fetchSearchResults();
  }, [searchTerm, accessToken, query]);

  return searchData;
};
