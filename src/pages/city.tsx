import { useParams } from "react-router";

export default function City() {
  let { id } = useParams();
  return <div>city: {id}</div>;
}
