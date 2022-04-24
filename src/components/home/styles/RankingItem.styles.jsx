import styled from '@emotion/styled';

export const Block = styled.p`
  position: relative;
  display: inline-block;
  width: 49%;
  padding: 6px 0 9px;
  font-size: 14px;
  line-height: 20px;

  // @media screen and (min-width: 1100px)
  width: 100%;
  padding: 5px 3px;
  box-sizing: border-box;

  & em {
    display: inline-block;
    width: 20px;
    margin-right: 10px;
    font-weight: 700;
    color: #94969b;
    text-align: center;
    line-height: 20px;
    vertical-align: middle;
  }

  & span {
    position: absolute;
    top: calc(50% - 8px);
    right: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 1px 4px 0 0;
    vertical-align: middle;
    text-indent: -9999px;
  }

  & a {
    display: inline-block;
    line-height: 17px;
    vertical-align: middle;
  }

  .up {
    background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png)
      no-repeat;
    background-size: 600px 900px;
    background-position: -270px -600px;
  }
`;
