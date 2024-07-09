import { useState, useEffect } from "react";

export const useFetchMyQueue = () => {

  const [queue, setQueue] = useState({});
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

        const jsonified = await res.json();
        console.log(jsonified.queue);
        // const playlists = jsonified.items.map((item) => {
        //   return {
        //     name: item.name,
        //     id: item.id,
        //     imgUrl: item.images[0].url, 
        //     description: item.description
        //   }
        // });
        // setUserPlaylists(() => playlists);

      } catch (error) {
        console.error(`catch clause error in fetchMyPlaylists: ${error}`);
      }
    }
    fetchMyQueue();
  },[accessToken]);

  // return userPlaylists;
}