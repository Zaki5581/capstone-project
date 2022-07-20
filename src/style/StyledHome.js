import styled from 'styled-components';

const StyledHome = styled.div`
  font-size: 2rem;
  width: 100vw;
  margin: auto;
  display: flex;
  justify-content: center;
  background: linear-gradient(-45deg, #e8c014, #f28306, #ffefca, #ff8600);
  background-size: 400% 400%;
  animation: gradient 25s linear infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  img {
    margin-top: 2px;
  }
`;

export default StyledHome;
