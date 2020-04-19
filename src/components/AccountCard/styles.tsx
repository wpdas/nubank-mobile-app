import styled from 'styled-components/native';
import { ThemeProps } from '@theme';

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const IconContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const IconText = styled.Text`
  font-size: 15px;
  color: ${(props: ThemeProps) => props.theme.current.tertiaryTextColor};
  margin-left: 16px;
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${(props: ThemeProps) => props.theme.current.tertiaryTextColor};
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

export const Description = styled.Text`
  margin: 4px 0;
  font-size: 32px;
  height: 36px;
  line-height: 40px;
  color: ${(props: ThemeProps) => props.theme.current.primaryTextColor};
  margin-left: -2px;
  font-family: ${(props: ThemeProps) => props.theme.current.semiBoldFont};
`;

export const CardFooter = styled.View`
  padding: 30px 0;
  margin-top: 30px;
  background: ${(props: ThemeProps) => props.theme.current.tertiaryColor};
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const AnnotationIconWrapper = styled.View`
  align-self: center;
  margin: 0 16px;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: ${(props: ThemeProps) => props.theme.current.primaryTextColor};
  width: 60%;
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;
