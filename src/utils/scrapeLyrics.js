import { useState, useEffect } from "react";

export const useScrapeLyrics = (song, artist) => {

  const artistString = artist.join('-').replaceAll('.','').toLowerCase().split(" ").join("-");
  const songString = song.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll('.','').replaceAll(' ', '-');
  const apiUrl = `https://cors-proxy-production-726b.up.railway.app/api/scrape?artist=${encodeURIComponent(artistString)}&song=${encodeURIComponent(songString)}`;

  const [scrapedLyrics, setScrapedLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setScrapedLyrics(() => "");
    setIsLoading(() => true);

    fetch(apiUrl).then(res => {
      return res.json();
    }).then(data => {
      if (data.lyrics) {
        let returned = data.lyrics;
        setScrapedLyrics(() => returned);
        setIsLoading(() => false);
      }
    }).catch(error => error);
  }, [apiUrl]);

    
  return [scrapedLyrics, isLoading];
}