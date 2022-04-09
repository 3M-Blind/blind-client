import React, { useEffect, useState } from "react";
import { Block } from "./TopicBest.styles";

import TopicBestArticle from "./TopicBestArticle";

function TopicBest() {
  const [topicBestArticleList, setTopicBestArticleList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/TopicBestArticleList")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTopicBestArticleList(data);
      });
  }, []);

  return (
    <Block>
      <h2>
        <i>
          <img src="https://d2u3dcdbebyaiu.cloudfront.net/img/web/ico-best.png" />
        </i>
        토픽베스트
      </h2>
      {topicBestArticleList.map((topicBestArticle) => {
        return (
          <TopicBestArticle
            topicBestArticle={topicBestArticle}
            key={topicBestArticle.id}
          ></TopicBestArticle>
        );
      })}

      {/* {Array(10)
        .fill()
        .map((el) => (
          <TopicBestArticle />
        ))} */}
      <a href="#">더보기</a>
    </Block>
  );
}

export default TopicBest;
