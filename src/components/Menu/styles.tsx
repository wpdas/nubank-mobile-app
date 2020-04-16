import styled from 'styled-components/native';
import React from 'react';
import {ScrollViewProps, ScrollView} from 'react-native';

export const Container = styled.ScrollView.attrs<
  ScrollViewProps & React.RefAttributes<ScrollView>
>({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
`;
