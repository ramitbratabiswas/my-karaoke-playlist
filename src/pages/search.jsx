import Accordion from "../components/accordion";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchSearchResults } from "../utils/fetchSearchResults";

export default function SearchResults() {

  const data = useFetchSearchResults("No More Parties");

  return <Accordion data={data} />;
}