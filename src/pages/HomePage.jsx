import React from 'react';
import { Block } from './styles/HomePage.styles';

import Search from '../components/common/Search';
import TopicBest from '../components/home/TopicBest';
import RankingList from '../components/home/RankingList';

function HomePage(props) {
  return (
    <Block>
      {/* <h1>홈</h1> */}
      <div className='main'>
        <Search />
        <div>
          <TopicBest />
          {/* <div>Best</div> */}
          {/* 25개 */}
          <div>Topic</div>
        </div>
        <div></div>
      </div>
      <aside className='aside'>
        <RankingList />
      </aside>
    </Block>
  );
}

export default HomePage;
