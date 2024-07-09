import Accordion from "../components/accordion";
import { useFetchMyTopLong } from "../utils/fetchMyTopLong";

export default function TopLong() {

  const data = useFetchMyTopLong();

  return <Accordion data={data} />;
}