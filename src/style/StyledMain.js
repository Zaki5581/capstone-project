import styled from 'styled-components';

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
    width: 8rem;
    height: 2rem;
    font-weight: 200;
    border-radius: 3px;
    border: none;
    margin-right: 3px;
  }
  dd {
    display: flex;
    align-items: center;
    white-space: nowrap;
    padding: 3px;
  }
  .sets-field {
    margin-left: 1.3rem;
  }

  .weeks-plan {
    height: auto;
    display: flex;
    align-items: flex-start;
    overflow-x: auto;
    margin-top: 0;
  }
  .plan-top {
    font-size: 1.1rem;
    background-color: #ffefca;
    width: 90vw;
    height: auto;
    grid-area: area3;
    position: relative;
    text-align: center;
    border-radius: 7px;
  }

  .plan-bottom {
    background-color: #ffefca;
    font-size: 1.1rem;
    width: fit-content;
    height: fit-content;
    border-radius: 7px;
    display: grid;
    grid-template-areas:
      'area4'
      'area5'
      'area6';
    grid-template-rows: 2rem 2rem auto;
    place-items: center;
    margin: 0 0.5rem;
  }
  h4 {
    grid-area: area4;
  }
  h3 {
    margin-top: 0;
    grid-area: area5;
  }

  .sets-input {
    width: 2.2rem;
    height: 1.2rem;
    border: none;
    position: absolute;
    right: 0;
  }

  .done-button,
  .set-button {
    background-color: #e8c014;
    width: 6rem;
    height: 1.4rem;
    border-radius: 7px;
    bottom: 1rem;
    border: none;
    margin: 1rem 0;
  }
`;
export default StyledMain;
