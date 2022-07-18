import styled from 'styled-components';

import picture from '../images/guzman.jpg';

const StyledNavigation = styled.nav`
  background-image: url(${picture});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    background-color: rgba(255, 248, 236, 0.6);
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
  button {
    position: absolute;
    top: 8rem;
    font-size: 72px;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  h3 {
    position: absolute;
    top: 9rem;
    text-align: center;
    font-size: 2em;
    color: black;
    letter-spacing: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    animation: blur 1.75s ease-out infinite;
    text-shadow: 0px 0px 3px rgba(218, 165, 32), 0px 0px 7px rgba(218, 165, 32);
  }

  @keyframes blur {
    from {
      text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff, 0px 0px 25px #fff, 0px 0px 25px #fff, 0px 0px 25px #fff,
        // eslint-disable-line
        // eslint-disable-line
        0px 0px 25px #fff,
        // eslint-disable-line
        // eslint-disable-line
        0px 0px 25px #fff,
        // eslint-disable-line
        0px 0px 25px #fff,
        0px 0px 50px #fff, 0px 0px 50px #fff,
        // eslint-disable-line
        0px 0px 50px #7b96b8,
        // eslint-disable-line
        0px 0px 150px #7b96b8,
        // eslint-disable-line
        0px 10px 100px #7b96b8,
        0px 10px 100px #7b96b8,
        // eslint-disable-line
        0px 10px 100px #7b96b8,
        // eslint-disable-line
        0px 10px 100px #7b96b8,
        // eslint-disable-line
        0px -10px 100px #7b96b8,
        0px -10px 100px #7b96b8; // eslint-disable-line
    }
  }
`;

export default StyledNavigation;
