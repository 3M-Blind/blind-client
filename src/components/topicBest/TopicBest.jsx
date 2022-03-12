import React from 'react';
import { Block } from './TopicBest.styles';

import TopicBestArticle from './TopicBestArticle';

function TopicBest() {
  return (
    <Block>
      <h2>
        <i>
          <img src="https://d2u3dcdbebyaiu.cloudfront.net/img/web/ico-best.png" />
        </i>
        토픽베스트
      </h2>
      {Array(10)
        .fill()
        .map((el) => (
          <TopicBestArticle />
        ))}
      <a href="#">더보기</a>
    </Block>
  );
}

export default TopicBest;
