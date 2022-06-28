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
    width: fit-content;
  }
  .sets-input {
    width: 4rem;
  }
`;
export default StyledForm;
