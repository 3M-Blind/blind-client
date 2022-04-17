import { useParams } from "react-router-dom";

export default function TopicsPage() {
  const { topic } = useParams();
  return <div>{topic} 페이지</div>;
}
