import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';
import { ThemeProps } from '@theme';

export const Container = styled(Animated.View)`
  margin: 0 30px;
`;

export const Code = styled.View`
  background: ${(props: ThemeProps) => props.theme.current.secondaryColor};
  padding: 10px;
  align-self: center;
`;

export const AccountInfo = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: ${(props: ThemeProps) => props.theme.current.primaryIconColor};
  margin-bottom: 4px;
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

export const InfoTextStrong = styled.Text`
  font-family: ${(props: ThemeProps) => props.theme.current.boldFont};
`;

export const Nav = styled.View`
  margin-top: 30px;
  align-self: stretch;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavItemTouchableButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const IconNavTextWrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: ${(props: ThemeProps) => props.theme.current.primaryIconColor};
  margin-left: 20px;
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: ${(props: ThemeProps) => props.theme.current.primaryIconColor};
  font-weight: bold;
  font-size: 14px;
  font-family: ${(props: ThemeProps) => props.theme.current.blackFont};
`;
