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
  font-size: 13px;
  /* color: ${(props: ThemeProps) => props.theme.current.tertiaryTextColor}; */
  color: #00b3d9;
  font-family: ${(props: ThemeProps) => props.theme.current.blackFont};
`;

export const DescriptionStrong = styled.Text`
  font-size: 32px;
  margin-top: 2px;
  font-weight: bold;
  /* color: ${(props: ThemeProps) => props.theme.current.primaryTextColor}; */
  color: #00b3d9;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 2px;
  /* color: ${(props: ThemeProps) => props.theme.current.primaryTextColor}; */
  color: #00b3d9;
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  margin-top: 2px;
  color: ${(props: ThemeProps) => props.theme.current.primaryTextColor};
`;

export const SubTitleStrong = styled.Text`
  font-size: 15px;
  margin-top: 2px;
  font-weight: bold;
  color: #97cb59;
  /* color: ${(props: ThemeProps) => props.theme.current.primaryTextColor}; */
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
  color: ${(props: ThemeProps) => props.theme.current.primaryTextColor};
  width: 60%;
`;
