import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { ThemeProps } from '@theme';

export const CardHeader = styled.View`
  align-items: center;
  padding: 25px;
`;

export const CardContent = styled.View`
  flex: 1;
  align-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 8px;
  color: ${(props: ThemeProps) => props.theme.current.primaryTextColor};
  font-family: ${(props: ThemeProps) => props.theme.current.boldFont};
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  text-align: center;
  padding: 0 10%;
  line-height: 22px;
  color: ${(props: ThemeProps) => props.theme.current.primaryTextColor};
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

export const CardFooter = styled.View`
  padding: 30px 0;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ActiveButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${(props: ThemeProps) => props.theme.current.primaryColor};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 16px 20%;
  margin-top: 15px;
`;

export const ActiveButtonText = styled.Text`
  color: ${(props: ThemeProps) => props.theme.current.primaryColor};
  font-weight: bold;
  font-size: 13px;
  font-family: ${(props: ThemeProps) => props.theme.current.blackFont};
`;
