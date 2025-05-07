import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrapeLyrics } from "../utils/scrapeLyrics.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ data }) {
  const { name, tracks } = data;
  const [selected, setSelected] = useState(-1);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  // Only call scrapeLyrics when a track is selected
  let [lyrics, loading] = useScrapeLyrics(
    selected > 0 ? tracks[selected - 1]?.song : "",
    selected > 0 ? tracks[selected - 1]?.artist : []
  );

  const handleSingleSelection = (currentId) => {
    setSelected((prev) => (prev === currentId ? -1 : currentId));
  };

  // Apply filter to song and artist fields
  const filteredTracks = tracks.filter((track) =>
    track.song.toLowerCase().includes(filter.toLowerCase()) ||
    track.artist.some((a) => a.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div>
      {name && (
        <div className="list-heading">
          <h1
            id="accordion-heading-back"
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </h1>
          <h1 id="accordion-heading-name">{name}</h1>
        </div>
      )}

      <div className="accordion-filter-bar">
        <input
          type="text"
          placeholder="Filter by song or artist..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="wrapper accordion">
        {filteredTracks.length > 0 ? (
          filteredTracks.map((entry) => (
            <div className="items" key={entry.id}>
              <div className="id">{entry.id}</div>
              <div
                className="song"
                onClick={() => handleSingleSelection(entry.id)}
              >
                <img className="albumArt" src={entry.image} />
                <div className="songInfo">
                  <p id="songName">{entry.song}</p>
                  <p id="artists">
                    {entry.artist.map((name, i) =>
                      i === 0 ? name : ", " + name
                    )}
                  </p>
                </div>
                <div className="lyrics">
                  {selected === entry.id && (
                    <div className="insideAcrdn">
                      {loading ? "loading..." : lyrics}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="accordion-init-loading">
            <p className="accordion-init-loading-text">
              {name ? `no matching tracks.` : `loading...`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
