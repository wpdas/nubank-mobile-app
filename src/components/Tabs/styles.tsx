import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import { ThemeProps } from '@theme';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs<ScrollView>({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 98px;
  height: 98px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  margin-left: 8px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: ${(props: ThemeProps) => props.theme.current.secondaryColor};
`;
