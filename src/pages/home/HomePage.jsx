import React from 'react';
import { Block } from './HomePage.styles';

import Search from '../../components/search/Search';
import TopicBest from '../../components/topicBest/TopicBest';

function HomePage(props) {
  return (
    <Block>
      {/* <h1>홈</h1> */}
      <div className="main">
        <Search />
        <div>
          <TopicBest />
          {/* <div>Best</div> */}
          {/* 25개 */}
          <div>Topic</div>
        </div>
        <div></div>
      </div>
    </Block>
  );
}

export default HomePage;
