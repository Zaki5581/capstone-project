import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
  }

  body {
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Sintony', sans-serif;
  }
`;
