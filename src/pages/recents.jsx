import Accordion from "../components/accordion";
import { useFetchMyRecents } from "../utils/fetchMyRecents";

export default function Recents() {

  const data = useFetchMyRecents();

  return <Accordion data={data} />;
}