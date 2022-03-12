import React from 'react';
import { Block } from './HomePage.styles';

import TopicBest from '../../components/topicBest/TopicBest';

function HomePage(props) {
  return (
    <Block>
      {/* <h1>홈</h1> */}
      <div className="main">
        <section>
          {/* <h1>검색</h1>
          <span></span>
          <input />
          <button></button> */}
        </section>
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
