import styled from '@emotion/styled';

export const Block = styled.section`
  position: relative;

  & h1 {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    font-size: 1px;
    line-height: 100px;
    white-space: nowrap;
  }

  & input {
    display: block;
    width: 736px;
    height: 60px;
    padding: 0 10px 0 62px;
    border: 2px solid #222;
    border-radius: 30px;
    font-size: 18px;
    box-sizing: border-box;
  }

  & button {
    top: 2px;
    right: auto;
    left: 10px;
    width: 56px;
    height: 56px;
    color: #fff;

    position: absolute;
    z-index: 1;
    text-indent: -9999px;
  }

  & button:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 24px;
    height: 24px;
    background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png)
      no-repeat;
    background-size: 600px 900px;
    background-position: -10px -350px;
    content: '';
  }
`;
