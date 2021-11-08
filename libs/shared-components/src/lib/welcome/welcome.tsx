import styled from '@emotion/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  box-sizing: contain;
  background-color: black;
  padding: 30px;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  background-color: blue;
  color: palevioletred;
`;

export interface WelcomeProps {
  [key: string]: unknown;
}

/**
 * The Welcome component.
 * @param props The supported property for this Welcome element.
 * @returns The Welcome component as jsx element.
 */
export function Welcome(props: WelcomeProps): React.ReactElement {
  return (
    <TouchableOpacity>
      <Container>
        <Title>Welcome to Welcome!</Title>
      </Container>
    </TouchableOpacity>
  );
}

export default Welcome;
