import styled from '@emotion/styled';

export const Block = styled.div`
  position: relative;
  width: 100%;
  margin-top: 35px;

  & > h2 {
    position: relative;
    font-weight: 700;
    border-bottom: 1px solid #eee;

    // screen and (min-width: 1100px)
    height: 45px;
    padding-right: 52px;
    padding-left: 35px;
    border-bottom-width: 2px;
    font-size: 18px;
    line-height: 43px;
  }

  & > h2 > i {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: inline-block;
    width: 32px;
    height: 32px;
  }

  & > h2 > i > img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }

  & > a {
    display: block;
    padding: 14px 0;
    color: #94969b;
    font-size: 14px;
    text-align: center;

    position: absolute;
    top: 0;
    right: 0;
    padding-right: 16px;
    color: #222;
    font-size: 12px;
  }

  & a:after {
    content: '';
    background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png)
      no-repeat;
    background-size: 600px 900px;
    background-position: -10px -626px;
    right: 0;
    width: 16px;
    height: 16px;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
