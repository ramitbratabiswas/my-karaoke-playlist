import { useNavigate } from "react-router-dom";
import Accordion from "../components/accordion";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchResults() {

  const navigate = useNavigate();

  const {name, data} =
  {name: "search", data:{
    name: null,
    tracks: [
      {
        id: 1,
        song: "Can't tell me nothing",
        artist: ["Kanye West"] ,
        trackId: "",
        image: ""
      }
    ]
  }};

  return (
    <div>
      <div className="list-heading">
        <h1 id="accordion-heading-back" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft}/></h1>
        <h1 id="accordion-heading-name">{name}</h1>
      </div>
      <Accordion data={data} />
    </div>);
}