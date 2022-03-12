import styled from '@emotion/styled';

export const Block = styled.div`
  width: 100%;
  padding: 17px 20px 16px;
  box-sizing: border-box;

  // @media screen and (min-width: 1100px)
  margin-bottom: 24px;
  padding: 22px 21px 14px;
  background-color: #f8f8f8;

  & h1 {
    padding-bottom: 11px;
    font-weight: 700;

    // @media screen and (min-width: 1100px)
    padding-bottom: 8px;
    padding-left: 10px;
    font-size: 15px;
  }

  & > p {
    margin-top: 4px;
    padding: 9px 0 8px;
    color: #94969b;
    font-size: 11px;
    letter-spacing: -0.5px;

    // @media screen and (min-width: 1100px)
    text-align: center;
  }

  & > p:before {
    background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png)
      no-repeat;
    background-size: 600px 900px;
    background-position: -218px -600px;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: top;
    content: '';
  }
`;
