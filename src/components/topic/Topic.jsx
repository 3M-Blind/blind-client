import React from 'react';
import { useParams } from 'react-router-dom';

import TopicSelect from './TopicSelect';

const Topic = () => {
  const { topic } = useParams();
  console.log(topic);
  return (
    <div>
      <TopicSelect />
    </div>
  );
};

export default Topic;
