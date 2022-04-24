import React from 'react';
import { Block } from './styles/RankingList.styles';
import RankingItem from './RankingItem';

function RankingList() {
  return (
    <Block>
      <h1>실시간 인기 회사</h1>
      <div>
        {Array(10)
          .fill()
          .map((el, i) => (
            <RankingItem key={i} />
          ))}
      </div>
      <p>블라인드에서 실시간으로 많이 검색된 회사 순위</p>
    </Block>
  );
}

export default RankingList;
