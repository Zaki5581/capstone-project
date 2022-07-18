import styled from 'styled-components';

const StyledNutrition = styled.form`
  height: fit-content;
  background-color: #000030;
  color: #a0a0a0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  input {
    background-color: #ffefca;
    font-size: 1rem;
    width: 3.6rem;
    height: 1.5rem;
    margin: 0.3rem;
    border: none;
    border-radius: 3px;
    text-align: center;
  }
  .input-block {
    display: flex;
    justify-content: space-evenly;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin-right: 1rem;
  }
  li {
    font-size: 1.1rem;
    color: #e8c014;
  }
  button {
    background-color: #e8c014;
    width: 6rem;
    height: 1.4rem;
    border-radius: 7px;
    bottom: 1rem;
    border: none;
    margin: 0.5rem 0;
  }
  .chart {
    display: flex;
    align-items: center;
    background-color: beige;
    height: 20rem;
  }
`;

export default StyledNutrition;
