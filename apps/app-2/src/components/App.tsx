import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background: var(--gr-lime-blue);
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  h1 {
    font-size: var(--font-size-h1);
    width: max-content;
    text-transform: uppercase;
    background: var(--teal);
    background: var(--gr-teal-blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const App: React.FC = () => (
  <Container>
    <Title>
      <h1>App 2</h1>
    </Title>
  </Container>
);

export default App;
