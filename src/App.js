import styled from 'styled-components';

import Form from './components/Form';

export default function App() {
  return (
    <Main>
      <h2>Fitness App</h2>
      <Form />
    </Main>
  );
}

const Main = styled.main`
  h2 {
    display: flex;
    justify-content: center;
  }
`;
