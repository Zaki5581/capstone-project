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
    display: grid;
    grid-template-areas:
      'area1'
      'area2'
      'area3';
    grid-template-rows: 5rem 5rem auto;
    row-gap: 0;
    place-items: center;
    scrollbar-width: none;
  }

  .group1,
  .group2 {
    display: flex;
    flex-direction: column;
  }
  .exercise-row {
    grid-area: area2;
    max-height: 2.5rem;
    width: 80vw;
    display: flex;
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
    padding: 1px;
    margin-left: 1px;
  }
  p {
    font-weight: 100;
    margin-left: auto;
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
    grid-area: area3;
    position: relative;
    text-align: center;
    border-radius: 7px;
  }

  .plan-bottom {
    background-color: rgba(255, 239, 202, 0.8);
    font-size: 1.1rem;
    width: fit-content;
    height: fit-content;
    border-radius: 5%;
    display: grid;
    grid-template-areas:
      'area4'
      'area5'
      'area6';
    grid-template-rows: 2rem 2rem auto;
    margin: 0 0.5rem;
  }
  h4 {
    color: black;
    font-size: 0.8rem;
    grid-area: area4;
  }
  h3 {
    margin: 0 auto;
  }

  .sets-input {
    background-color: #7c7b77;
    width: 3rem;
    height: 1.2rem;
    border: none;
    border-radius: 3px;
    position: absolute;
    right: 1rem;
  }

  .done-button,
  .set-button {
    background-color: #e8c014;
    font-size: 1.2rem;
    font-weight: 700;
    width: 10rem;
    height: 2rem;
    border-radius: 7px;
    bottom: 1rem;
    border: none;
    margin: 1rem auto;
  }
`;
export default StyledMain;
