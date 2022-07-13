import styled from 'styled-components';

const StyledMain = styled.main`
  height: 90vh;
  display: grid;
  grid-template-areas: 'top' 'bottom';
  grid-auto-rows: 50vh 40vh;
  background-color: #000030;
  color: #a0a0a0;
  form {
    grid-area: top;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  select {
    background-color: #a0a0a0;
    font-size: 1.1rem;
    width: 11rem;
    height: 2.5rem;
    margin: auto;
    border-radius: 3px;
  }
  .bodypart-row {
    margin: auto;
  }
  li {
    list-style: none;
    width: 240px;
  }

  .weeks-plan {
    grid-area: bottom;
    display: flex;
    overflow-x: auto;
  }

  .workout-block {
    font-size: 1.1rem;
    background-color: beige;
    box-shadow: 1px 1px silver;
    position: relative;
    min-width: 15rem;
    min-height: 8rem;
    border-radius: 7px;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    margin-right: 3rem;
    color: #a0a0a0;
  }

  .plan-top {
    min-width: 22rem;
    box-shadow: 1px 1px silver;
    position: relative;
  }
  .sets-input {
    position: absolute;
    right: 0;
    width: 2.2rem;
    height: 1.1rem;
    border: none;
  }
  button {
    font-size: 1.1rem;
    width: 6rem;
    height: 2rem;
    background-color: #c0aa76;
    border-radius: 7px;
    border: none;
    margin-top: 1rem;
  }

  h3 {
    width: fit-content;
    text-align: center;
  }
  .done-button {
    position: absolute;
    bottom: 1rem;
    left: 5rem;
  }
`;
export default StyledMain;
