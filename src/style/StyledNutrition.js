import styled from 'styled-components';

const StyledNutrition = styled.form`
  height: 100vh;
  display: grid;
  grid-template-areas: 'input1' 'section' 'input2';
  grid-template-rows: 6rem auto 6rem;
  background-color: #000030;
  color: #a0a0a0;
  .input-field1 {
    grid-area: input1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }
  input {
    background-color: #ffefca;
    font-size: 1rem;
    width: 3rem;
    height: 1.5rem;
    margin: 0.3rem;
    border: none;
    border-radius: 3px;
  }
  .input-block1,
  ul {
    list-style: none;
    width: 75vw;
    display: flex;
    justify-content: space-around;
    padding-left: 0;
  }
  li {
    color: #e8c014;
  }

  button {
    width: 5rem;
    position: absolute;
    right: 0.5rem;
  }

  .input-field2 {
    grid-area: input2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  .chart {
    grid-area: section;
    display: flex;
    align-items: center;
    background-color: beige;
    min-height: 20rem;
  }
`;

export default StyledNutrition;
