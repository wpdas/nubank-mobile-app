import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import CardContainer from '@components/CardContainer';
import { ThemeValue } from '@theme';
import {
  CardHeader,
  IconContainer,
  IconText,
  CardContent,
  Title,
  Description,
  DescriptionStrong,
  SubTitle,
  SubTitleStrong,
  CardFooter,
  AnnotationIconWrapper,
  Annotation,
} from './styles';

const CreditCard: React.FC = () => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);

  return (
    <CardContainer>
      <CardHeader>
        <IconContainer>
          <Icon name="credit-card" size={22} color={theme.tertiaryIconColor} />
          <IconText>Cartão de crédito</IconText>
        </IconContainer>
      </CardHeader>
      <CardContent>
        <Title>FATURA ATUAL</Title>
        <Description>
          R$ <DescriptionStrong>1.439</DescriptionStrong>,17
        </Description>
        <SubTitle>
          Limite disponível <SubTitleStrong>R$ 126,17</SubTitleStrong>
        </SubTitle>
      </CardContent>
      <CardFooter>
        <AnnotationIconWrapper>
          <Icon name="cup" size={22} color={theme.primaryTextColor} />
        </AnnotationIconWrapper>
        <Annotation>
          Compra mais recente Starbucks Belo Horizonte no valor de R$ 12,86.
        </Annotation>
        <AnnotationIconWrapper>
          <Icon name="arrow-right" size={10} color={theme.tertiaryIconColor} />
        </AnnotationIconWrapper>
      </CardFooter>
    </CardContainer>
  );
};

export default CreditCard;
