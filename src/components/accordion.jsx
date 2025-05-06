import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchLyrics } from "../utils/fetchLyrics.js"
import { useScrapeLyrics } from "../utils/scrapeLyrics.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ data }) {

  const { name, tracks } = data;
  // selected denotes the index of the selected track
  const [selected, setSelected] = useState(-1);
  let [lyrics, loading] = useScrapeLyrics(selected > 0 ? tracks[selected-1].song : "", selected > 0 ? tracks[selected-1].artist : []);
  // let [lyrics, loading] = useFetchLyrics(selected > 0 ? tracks[selected-1].song : "", selected > 0 ? tracks[selected-1].artist : []);

  const navigate = useNavigate();

  function handleSingleSelection(currentId) {
    if (selected !== currentId) {
      setSelected(() => currentId);
    } else {
      setSelected(() => -1);
    }
  }

  return (
    <div>
      {/* delay name load */}
      { name ? <div className="list-heading">
        <h1 id="accordion-heading-back" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft}/></h1>
        <h1 id="accordion-heading-name">{name}</h1>
      </div> : null}
      
      <div className="wrapper accordion">
        {
          tracks && tracks.length > 0 ?
            tracks.map((entry) => (
              <div className='items' key={entry.id}>
                <div className='id'> {entry.id} </div>
                <div className='song' onClick={() => handleSingleSelection(entry.id)}>
                  <img className='albumArt' src={entry.image}/>
                  <div className="songInfo">
                    <p id='songName'>{entry.song}</p>
                    <p id='artists'>{entry.artist.map((name, i) => i === 0 ? name : ", " + name)}</p>
                  </div>
                  <div className='lyrics'>{
                    selected === entry.id ?
                      <div className="insideAcrdn">
                        {loading ? "loading..." : lyrics}
                      </div>
                      : null
                  }</div>
                </div>
              </div>
            )) : <div className="accordion-init-loading"><p className="accordion-init-loading-text">loading ...</p></div>
        }
      </div>
    </div>
  );
}
