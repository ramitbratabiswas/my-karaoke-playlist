import Accordion from "../components/accordion";
import { useFetchMyTopShort } from "../utils/fetchMyTopShort";

export default function TopShort() {

  const data = useFetchMyTopShort();

  return <Accordion data={data} />;
}