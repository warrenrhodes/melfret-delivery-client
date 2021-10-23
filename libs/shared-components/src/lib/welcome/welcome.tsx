import React from 'react';
import styled from '@emotion/native';
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
/* eslint-disable-next-line */
export interface WelcomeProps { }

export function Welcome(props: WelcomeProps) {
  return (
    <TouchableOpacity>
      <Container>
        <Title>Welcome to Welcome!</Title>
      </Container>
    </TouchableOpacity>
  );
}

export default Welcome;
