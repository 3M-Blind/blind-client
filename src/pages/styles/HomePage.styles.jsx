import styled from '@emotion/styled';

export const Block = styled.div`
  flex-direction: row;
  border-top: none;
  padding: 40px 20px 0;

  display: flex;
  max-width: 1140px;
  box-sizing: border-box;
  margin: 0 auto;

  .main {
    width: 736px;
    min-height: 800px;
  }

  .aside {
    width: 300px;
    margin-left: 64px;
  }
`;
