import React from 'react';
import { Block } from './styles/Search.styles';

function Search() {
  return (
    <Block>
      <h1>검색</h1>
      <span></span>
      <input placeholder='관심있는 내용을 검색해보세요!' />
      <button>검색</button>
    </Block>
  );
}

export default Search;
