import styled from 'styled-components';

const StyledMain = styled.main`
  height: 90vh;
  display: grid;
  grid-template-areas: 'top' 'bottom';
  grid-auto-rows: 50vh 40vh;
  form {
    grid-area: top;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  select {
    width: 11rem;
    height: 1.5rem;
    margin: auto;
  }

  li {
    list-style: none;
    width: 240px;
    margin: 8px 0;
  }

  .weeks-plan {
    grid-area: bottom;
    display: flex;
    overflow-x: auto;
  }
  .workout-block {
    position: relative;
    min-width: 15rem;
    min-height: 8rem;
    border-radius: 7px;
    margin: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plan-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .setsInput {
    width: 2rem;
    height: 0.8rem;
  }
  button {
    font-size: 1.1rem;
    width: 6rem;
    height: 2rem;
    background-color: #6e64;
    border-radius: 7px;
    border: none;
  }

  h3 {
    width: fit-content;
    margin: 0 75px;
    text-align: center;
  }
  .done-button {
    color: blue;
    position: absolute;
    bottom: 1rem;
    left: 5rem;
  }
`;
export default StyledMain;
