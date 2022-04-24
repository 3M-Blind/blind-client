import styled from '@emotion/styled';

export const HeaderBlock = styled.header`
  height: 80px;
  border-bottom: 1px solid #d4d4d4;

  position: relative;
  z-index: 100;
`;

export const Wrapped = styled.div`
  position: relative;
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 20px;

  & h1 {
    position: absolute;
    left: 20px;

    top: 22px;
  }

  & h1 > a {
    background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png)
      no-repeat;
    background-size: 600px 900px;
    background-position: -9px -10px;
    width: 94px;
    height: 40px;

    display: block;
    text-indent: -9999px;

    cursor: pointer;
  }

  & h1 > em {
    bottom: 4px;
    left: calc(100% + 7px);
    background: url(https://d2u3dcdbebyaiu.cloudfront.net/img/www_kr/sp-kr.png)
      no-repeat;
    background-size: 600px 900px;
    background-position: -112px -28px;
    width: 54px;
    height: 22px;

    overflow: hidden;
    position: absolute;
    display: inline-block;
    font-size: 0;
    line-height: 0;
    text-indent: -999em;
  }

  & nav {
    position: absolute;
    top: 16px;
    left: 206px;
    right: 0;
    height: 80px;
    padding-left: 0;
    border: none;
    overflow: hidden;
    width: auto;

    display: block;
  }

  & nav > div {
    margin: 0;

    overflow: hidden;
  }

  & nav > div > div {
    margin: 0 15px 0 10px;
  }
`;

export const SwiperWrapper = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;

  & li {
    color: #222;
    font-weight: 700;

    padding-top: 0;

    position: relative;
    cursor: pointer;

    font-size: 20px;
    margin-right: 30px;

    width: auto;
    height: 60px;
    text-align: center;
    line-height: 1.26em;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
`;

export const Func = styled.div`
  top: 21px;
  right: 20px;
  padding-left: 0;

  position: absolute;
  z-index: 100;

  & div {
    display: inline-block;
    font-size: 0;
    vertical-align: top;
  }

  & div > a {
    width: 82px;
    height: 40px;
    margin-left: 10px;
    font-size: 14px;
    line-height: 38px;

    display: inline-block;
    border-width: 1px;
    border-style: solid;
    font-weight: 700;
    text-align: center;
    box-sizing: border-box;
    vertical-align: top;

    cursor: pointer;
  }
`;

export const BtnPost = styled.a`
  background-color: #da3238;
  border-color: #da3238;
  color: #fff;
`;

export const BtnSignin = styled.a`
  background-color: #fff;
  border-color: #d4d4d4;
  color: #222;
`;

// .active {
//   color: #222;
//   font-weight: 700;
// }
