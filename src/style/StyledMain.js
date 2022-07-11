import styled from 'styled-components';

const StyledMain = styled.main`
  form {
    display: grid;
    text-align: center;
    gap: 1rem;
  }
  h2 {
    display: flex;
    justify-content: center;
  }
  select {
    width: 11rem;
    height: 1.5rem;
    margin: auto;
  }
  .workout-plan {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .workout-plan2 {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .sets-input {
    width: 4rem;
    height: 1.8rem;
    margin-right: 1rem;
  }
  button {
    margin: 2rem auto;
    font-size: 1.1rem;
    width: 6rem;
    height: 2rem;
    background-color: #6e64;
    border-radius: 7px;
    border: none;
  }
  .done-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .weeks-plan {
    display: flex;
    overflow-x: auto;
  }
  .day-plan {
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
    border-radius: 7px;
  }
  h3 {
    text-align: center;
    text-decoration: underline;
  }
`;
export default StyledMain;
