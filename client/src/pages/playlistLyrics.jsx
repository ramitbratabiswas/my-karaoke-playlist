import Accordion from "../components/accordion";
import { useParams } from "react-router-dom";
import { useFetchPlaylistData } from "../utils/fetchPlaylistData";

export default function PlaylistLyrics() {

  const { id } = useParams();
  const data = useFetchPlaylistData(id);

  return <Accordion data={data} />;
}