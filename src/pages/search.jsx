import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Accordion from "../components/accordion";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchSearchResults } from "../utils/fetchSearchResults";

export default function SearchResults() {
  const navigate = useNavigate();

  const [term, setTerm] = useState(""); // for triggering the fetch
  const [inputValue, setInputValue] = useState(""); // controlled input

  const data = useFetchSearchResults(term);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTerm(inputValue.trim());
    }
  };

  return (
    <div>
      <div className="list-heading">
        <h1
          id="accordion-heading-back"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </h1>
        <h1 id="accordion-heading-name">search</h1>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search tracks..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {term === "" ? <div></div>: <Accordion data={data} />}
    </div>
  );
}