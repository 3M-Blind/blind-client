import React from 'react';
import { Block } from './styles/RankingItem.styles';

function RankingItem() {
  return (
    <Block>
      <em>1</em>
      <span className='up'>up</span>
      <a>비바리퍼블리카</a>
    </Block>
  );
}

export default RankingItem;
