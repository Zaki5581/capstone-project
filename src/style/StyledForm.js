import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  text-align: center;

  li {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  ul {
    border: 1px solid;
    width: fit-content;
  }
  .setsInput {
    width: 2rem;
  }
`;
export default StyledForm;
