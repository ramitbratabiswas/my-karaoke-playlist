import { useState } from "react";
import { data } from './data.js';
import { useFetchLyrics } from "./fetchLyrics.js";
import { useFetchSpotify } from "./fetchSpotify.js";

export default function Accordion() {

  // useFetchSpotify();
  // const playlistMusic = useFetchSpotify();
  // console.log(`start of Accordion: ${playlistMusic[0].name}`);
  // const data = useFetchSpotify();

  const [selected, setSelected] = useState(-1);

  let [lyrics, loading] = useFetchLyrics(selected > 0 ? data[selected-1].song : "", selected > 0 ? data[selected-1].artist : []);
  
  function handleSingleSelection(currentId) {
    if (selected !== currentId) {
      setSelected(() => currentId);
    } else {
      setSelected(() => -1);
    }
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map((entry) => (
              <div className='items' key={entry.id}>
                <div className='id'> {entry.id} </div>
                <div className='song' onClick={() => handleSingleSelection(entry.id)}>
                  <p id='songName'>{entry.artist.map((name, i) => i === 0 ? name : ", " + name)} - {entry.song}</p>
                  <span id='plus'><b>+</b></span>
                  <div className='lyrics'>{
                    selected === entry.id ?
                      <div className="insideAcrdn">
                        {loading ? "loading..." : lyrics}
                      </div>
                      : null
                  }</div>
                </div>
              </div>
            )) : <div>No data found!</div>
        }
      </div>
    </div>
  );
}
