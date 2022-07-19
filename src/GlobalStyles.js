import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Prompt', sans-serif;
  }
`;
