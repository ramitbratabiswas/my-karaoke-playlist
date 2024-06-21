import * as cheerio from "cheerio";
import { useState, useEffect } from "react";

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const url = `${corsProxy}https://www.musixmatch.com/lyrics/Ms-Lauryn-Hill/Doo-Wop-That-Thing`;

export const useScrapeLyrics = () => {

  const [scrapedLyrics, setScrapedLyrics] = useState("");

  useEffect(() => {

    const fetchScrapedLyrics = async () => {
      try {
        const page = await fetch(url, {
          method: "GET",
        });
        const body = await page.text();
        const $ = await cheerio.load(body);

        const $lyrics = $('.r-ueyrd6');
        const lyrics = $lyrics.map((i, e) => $(e).text().toString());
        let finalLyrics = "";
        for (let lyric of lyrics) {
          finalLyrics += `${lyric}\n`;
        }
        setScrapedLyrics(() => finalLyrics);
      } catch (error) {
        console.error(`catch clause error in fetchScrapedLyrics: ${error}`);
      }
    }
    fetchScrapedLyrics();
  }, []);

  return scrapedLyrics;
}