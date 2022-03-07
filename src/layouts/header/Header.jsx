import React from 'react';
import {
  HeaderBlock,
  Wrapped,
  SwiperWrapper,
  Func,
  BtnPost,
  BtnSignin,
} from './styles';

function Header(props) {
  return (
    <HeaderBlock>
      <Wrapped>
        <h1>
          <a>Blind</a>
          <em>Topic</em>
        </h1>
        <nav>
          <div>
            <div>
              <SwiperWrapper>
                <li>
                  <span>
                    <a>홈</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a>기업 리뷰</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a>채용공고</a>
                  </span>
                </li>
              </SwiperWrapper>
            </div>
          </div>
        </nav>
        <Func>
          <div>
            <BtnPost>글쓰기</BtnPost>
            <BtnSignin>로그인</BtnSignin>
          </div>
        </Func>
      </Wrapped>
    </HeaderBlock>
  );
}

export default Header;
