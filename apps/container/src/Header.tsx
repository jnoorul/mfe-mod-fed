import React from 'react';
import styled from 'styled-components';
import { UserPreference } from './UserPreference/UserPreference';

export function Header() {
    return (
        <Container>
          <Title>Container Application</Title>
          <Caption>React Version {React.version}</Caption>
          <PreferenceSection>
            <UserPreference />
          </PreferenceSection>
      </Container>
    );
}

const Container = styled.div`
  border-bottom: solid 2px blue;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 0;
`;

const Caption = styled.h5`
  margin-top: 0;
  margin-bottom: 0;
`;

const PreferenceSection = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin-top: 1.5rem;
  width: 15rem;
`;