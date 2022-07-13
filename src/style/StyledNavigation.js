import styled from 'styled-components';

const StyledNavigation = styled.nav`
  height: 90vh;
  width: 100vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    background-color: rgba(218, 165, 32, 0.6);
    text-decoration: none;
    font-size: 1.5rem;
    height: 7rem;
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
  }
  ion-icon {
    position: absolute;
    top: 8rem;
    font-size: 72px;
    cursor: pointer;
  }
  h3 {
    position: absolute;
    top: 11rem;
  }
`;

export default StyledNavigation;
