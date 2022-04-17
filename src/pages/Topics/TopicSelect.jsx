import { Link } from 'react-router-dom';

import { useTopicList } from '../../DB/DummyLoader';

export default function TopicList() {
  const topicList = useTopicList();

  return (
    <div>
      {topicList.map((topic) => {
        return (
          <div key={topic}>
            <Link to={`/topics/${topic}`}>{topic}</Link>
          </div>
        );
      })}
    </div>
  );
}
