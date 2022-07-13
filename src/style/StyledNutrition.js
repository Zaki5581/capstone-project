import styled from 'styled-components';

const StyledNutrition = styled.form`
  height: 90vh;
  display: grid;
  grid-template-areas: 'input1' 'section' 'input2';
  grid-template-rows: 6rem 1fr 6rem;
  .input-field1 {
    grid-area: input1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;
  }
  input {
    font-size: 1rem;
    width: 3rem;
    height: 1.5rem;
    margin: 0.3rem;
  }
  .input-block1,
  ul {
    list-style: none;
    width: 75vw;
    display: flex;
    justify-content: space-around;
    padding-left: 0;
  }
  bold {
    color: red;
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
    margin-bottom: 2rem;
  }
  section {
    grid-area: section;
    border: 1px solid red;
    margin-bottom: 1rem;
  }
`;

export default StyledNutrition;
