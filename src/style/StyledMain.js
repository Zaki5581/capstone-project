import styled from 'styled-components';

import walls from '../images/metal.jpg';

const StyledMain = styled.main`
  height: 110vh;
  width: 100vw;
  background-color: #000030;
  color: rgba(0, 0, 0, 0.8);
  form {
    width: 100vw;
    height: auto;
  }
  label {
    color: #ffefca;
    font-weight: 400;
    font-size: 1.3rem;
    letter-spacing: 3px;
  }
  .group1,
  .group2 {
    display: flex;
    flex-direction: column;
  }
  .exercise-row {
    grid-area: area2;
    height: auto;
    width: fit-content;
    margin: 1rem auto;
  }

  .bodypart-row {
    display: flex;
    min-height: 4rem;
    width: 90vw;
    grid-area: 'area1';
    justify-content: space-evenly;
    text-align: center;
  }

  .date-input,
  select {
    background-color: #ffefca;
    font-size: 1.1rem;
    width: 9rem;
    height: 2rem;
    font-weight: 200;
    border-radius: 3px;
    border: none;
    margin-right: 3px;
  }
  dd {
    width: 15rem;
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-left: 1px;
  }
  p {
    font-weight: 200;
    margin-left: auto;
    text-decoration: underline;
  }

  .weeks-plan {
    background-image: url(${walls});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: auto;
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    margin-top: 0;
  }
  .plan-top {
    font-size: 1.1rem;
    background-color: rgba(255, 239, 202, 0.8);
    width: 90vw;
    height: auto;
    margin: auto;
    grid-area: area3;
    position: relative;
    text-align: center;
    border-radius: 7px;
  }

  .plan-bottom {
    background: linear-gradient(135deg, rgba(255, 239, 202, 0), rgba(255, 239, 202, 0.2));
    backdrop-filter: blur(10px);
    font-size: 1.2rem;
    width: 20rem;
    height: fit-content;
    border-radius: 3%;
    display: grid;
    grid-template-areas:
      'area4'
      'area5'
      'area6';
    grid-template-rows: 2rem 2rem auto;
    margin: 0.5rem;
    box-shadow: 1px 1px 7px 0.5px silver;
    line-height: 0px;
    padding: 0 2px;
  }
  h4 {
    color: black;
    font-size: 0.8rem;
    grid-area: area4;
    margin-left: 1rem;
  }
  h3 {
    margin: 0 auto;
    letter-spacing: 0.5rem;
    font-weight: 600;
    font-size: 1.5rem;
  }

  .sets-input {
    background-color: #7c7b77;
    font-size: 1.3rem;
    width: 3rem;
    height: 1.2rem;
    border: none;
    border-radius: 3px;
    position: absolute;
    right: 1rem;
  }

  .done-button,
  .set-button {
    background: linear-gradient(-45deg, #e8c014, #f28306, #ffefca, #ff8600);
    background-size: 400% 400%;
    animation: gradient 25s linear infinite;
    font-size: 1.2rem;
    font-weight: 700;
    width: 10rem;
    height: 2rem;
    border-radius: 7px;
    bottom: 1rem;
    border: none;
    margin: 0.1rem auto;
  }
`;
export default StyledMain;
