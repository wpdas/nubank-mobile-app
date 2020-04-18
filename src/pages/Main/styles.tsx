import styled from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #832a9a;
  /* Adjust according to the top center bar of some iphones  */
  padding-top: ${getStatusBarHeight()}px;
  justify-content: space-between;
  padding-bottom: ${getBottomSpace() + 20}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  max-height: 450px;
  z-index: 5;
`;

export const Cards = styled(Animated.View)`
  flex: 1;
  position: absolute;
`;
