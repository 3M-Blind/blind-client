import React from 'react';
import { Block } from './HomePage.styles';

import Search from '../../components/search/Search';
import TopicBest from '../../components/topicBest/TopicBest';
import ListRanking from '../../components/listRanking/ListRanking';
import Topic from '../../components/topic/Topic';

function HomePage(props) {
  return (
    <Block>
      {/* <h1>홈</h1> */}
      <div className="main">
        <Search />
        <div className="home-list">
          <TopicBest />
          {/* 25개 */}
          {Array(25)
            .fill()
            .map((el, i) => (
              <Topic key={i} />
            ))}
        </div>
        <div></div>
      </div>
      <aside className="aside">
        <ListRanking />
      </aside>
    </Block>
  );
}

export default HomePage;
