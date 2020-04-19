import styled from 'styled-components/native';
import { ThemeProps } from '@theme';

export const CreditCardMainContent = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CreditCardInfoArea = styled.View`
  flex: 1;
`;

export const CreditCardUsageBar = styled.View`
  width: 8px;
  background: ${(props: ThemeProps) => props.theme.current.nubankColor1};
`;

interface BarArea {
  area: number;
}

export const FutureExpenses = styled.View.attrs((props: BarArea) => ({
  area: props.area,
}))`
  background: ${(props: ThemeProps) => props.theme.current.nubankColor1};
  height: ${(props) => props.area}%;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
`;

export const CurrentExpenses = styled.View.attrs((props: BarArea) => ({
  area: props.area,
}))`
  background: ${(props: ThemeProps) => props.theme.current.nubankColor2};
  height: ${(props) => props.area}%;
`;

export const CurrentLimit = styled.View.attrs((props: BarArea) => ({
  area: props.area,
}))`
  background: ${(props: ThemeProps) => props.theme.current.nubankColor3};
  height: ${(props) => props.area}%;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
`;

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
  margin-top: -30px;
`;

export const Title = styled.Text`
  font-size: 12.5px;
  color: ${(props: ThemeProps) => props.theme.current.nubankColor2};
  font-family: ${(props: ThemeProps) => props.theme.current.blackFont};
`;

export const Description = styled.Text`
  margin: 4px 0;
  font-size: 32px;
  height: 36px;
  line-height: 40px;
  color: ${(props: ThemeProps) => props.theme.current.nubankColor2};
  margin-left: -2px;
  font-family: ${(props: ThemeProps) => props.theme.current.regularFont};
`;

export const DescriptionStrong = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${(props: ThemeProps) => props.theme.current.nubankColor2};
  font-family: ${(props: ThemeProps) => props.theme.current.boldFont};
`;

export const SubTitle = styled.Text`
  font-size: 15px;
  color: ${(props: ThemeProps) => props.theme.current.primaryTextColor};
  margin: 0;
`;

export const SubTitleStrong = styled.Text`
  font-size: 15px;
  color: ${(props: ThemeProps) => props.theme.current.nubankColor3};
  font-family: ${(props: ThemeProps) => props.theme.current.blackFont};
`;

export const CardFooter = styled.View`
  padding: 30px 0;
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
