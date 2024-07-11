import * as cheerio from "cheerio";
import { useState, useEffect } from "react";

export const useScrapeLyrics = (song, artist) => {

  const artistString = artist.join('-').replaceAll('.','').toLowerCase().split(" ").join("-");
  const songString = song.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/g, '').replaceAll('.','').replaceAll(' ', '-');

  const [scrapedLyrics, setScrapedLyrics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl = `http://localhost:8080/api/scrape?artist=${artistString}&song=${songString}`

  useEffect(() => {

    setScrapedLyrics(() => "");
    setIsLoading(() => true);

    const fetchScrapedLyrics = async () => {
      try {
        const page = await fetch(apiUrl);

        console.log(page);

        if (!page.ok) {
          setScrapedLyrics(() => "sorry, we couldn't find the lyrics for this one :(");
          setIsLoading(() => false);
          return;
        }

        const body = await page.text();
        const $ = await cheerio.load(body);

        const $lyrics = $('.r-ueyrd6');
        const lyrics = $lyrics.map((i, e) => $(e).text().toString());
        let finalLyrics = "";
        for (let lyric of lyrics) {
          finalLyrics += `${lyric}\n`;
        }
        setScrapedLyrics(() => finalLyrics);
        setIsLoading(() => false);
      } catch (error) {
        console.error(`catch clause error in fetchScrapedLyrics: ${error}`);
      }
    }
    fetchScrapedLyrics();
  }, [apiUrl]);

  return [scrapedLyrics, isLoading];
}