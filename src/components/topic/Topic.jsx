import React from 'react';
import { Block } from './Topic.styles';

import TopicArticle from './TopicArticle';

function Topic() {
  return (
    <Block>
      <h2>
        <i>
          <img />
        </i>
        블라블라
      </h2>
      <div>
        {Array(5)
          .fill()
          .map((el, i) => (
            <TopicArticle key={i} />
          ))}
      </div>
    </Block>
  );
}

export default Topic;
