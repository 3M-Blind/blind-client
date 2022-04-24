import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/'>홈</Link>
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
            {/* <BtnPost>
              <Link to="/signup">회원가입</Link>
            </BtnPost> */}
            <Link to='/signup'>회원가입</Link>

            <BtnPost>글쓰기</BtnPost>
            <BtnSignin>로그인</BtnSignin>
          </div>
        </Func>
      </Wrapped>
    </HeaderBlock>
  );
}

export default Header;
