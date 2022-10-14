import React from 'react';
import styled from 'styled-components';

export function Header() {
    return (
        <Container>
        <h2>Container Application</h2>
        <h5>React Version {React.version}</h5>
      </Container>
    );
}

const Container = styled.div`
  border-bottom: solid 2px blue;
`;