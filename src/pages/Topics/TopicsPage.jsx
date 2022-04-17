import { useParams } from 'react-router-dom';
import TopicSelect from './TopicSelect';

export default function TopicsPage() {
  const { topic } = useParams();
  return (
    <div>
      <TopicSelect></TopicSelect>
    </div>
  );
}
