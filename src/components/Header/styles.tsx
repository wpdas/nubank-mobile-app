import styled from 'styled-components/native';
import { ThemeProps } from '@theme';

export const Container = styled.View`
  align-items: center;
  padding: 20px 0 0;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: ${(props: ThemeProps) => props.theme.current.secondaryColor};
  font-weight: bold;
  margin-left: 8px;
  font-family: ${(props: ThemeProps) => props.theme.current.boldFont};
`;
