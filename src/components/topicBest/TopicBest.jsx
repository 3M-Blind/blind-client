import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Block } from './TopicBest.styles';
import TopicBestArticle from './TopicBestArticle';
import { useTopicBestArticles } from '../../DB/DummyLoader';

function TopicBest() {
  const topicBestArticleList = useTopicBestArticles();

  return (
    <Block>
      <h2>
        <i>
          <img src='https://d2u3dcdbebyaiu.cloudfront.net/img/web/ico-best.png' />
        </i>
        토픽베스트
      </h2>
      {topicBestArticleList.map((topicBestArticle) => {
        return (
          <TopicBestArticle
            topicBestArticle={topicBestArticle}
            key={topicBestArticle.postID}
          ></TopicBestArticle>
        );
      })}
      <a href='#'>더보기</a>
    </Block>
  );
}

export default TopicBest;
