import Accordion from "../components/accordion";
import { useFetchMyQueue } from "../utils/fetchMyQueue";

export default function Queue() {

  const data = useFetchMyQueue();

  return <Accordion data={data} />;
}