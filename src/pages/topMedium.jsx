import Accordion from "../components/accordion";
import { useFetchMyTopMedium } from "../utils/fetchMyTopMedium";

export default function TopMedium() {

  const data = useFetchMyTopMedium();

  return <Accordion data={data} />;
}