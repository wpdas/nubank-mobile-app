import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  /* Adjust according to the top center bar of some iphones  */
  padding-top: ${getStatusBarHeight()}px;
`;
