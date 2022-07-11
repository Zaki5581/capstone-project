import styled from 'styled-components';

const StyledNutrition = styled.form`
  height: 90vh;
  display: grid;
  grid-template-areas: 'input1' 'dia' 'input2';
  grid-template-rows: 6rem 1fr 6rem;
  .input-field1 {
    grid-area: input1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  input {
    width: 3rem;
    height: 1.5rem;
    margin: 0.3rem;
  }
  .input-block1 {
    margin: auto;
  }
  button {
    width: 4rem;
    margin: auto;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .input-field2 {
    margin-top: 0;
    grid-area: input2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default StyledNutrition;
