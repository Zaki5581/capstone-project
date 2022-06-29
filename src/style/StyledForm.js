import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  text-align: center;
  select {
    width: 20rem;
    margin: auto;
  }
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
