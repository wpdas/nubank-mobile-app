import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardContainer from '@components/CardContainer';
import {
  CardHeader,
  IconContainer,
  IconText,
  CardContent,
  Title,
  Description,
  CardFooter,
  AnnotationIconWrapper,
  Annotation,
} from './styles';

const AccountCard = () => (
  <CardContainer>
    <CardHeader>
      <IconContainer>
        <Icon name="wallet" size={22} color="#4a4848" />
        <IconText>Conta</IconText>
      </IconContainer>
      <Icon name="eye" size={22} color="#4a4848" />
    </CardHeader>
    <CardContent>
      <Title>Saldo disponível</Title>
      <Description>R$ 1.309,17</Description>
    </CardContent>
    <CardFooter>
      <AnnotationIconWrapper>
        <Icon name="arrow-down-circle" size={22} color="#8b10ae" />
      </AnnotationIconWrapper>
      <Annotation>Transferência de R$ 1.160,00 recebida hoje</Annotation>
      <AnnotationIconWrapper>
        <Icon name="arrow-right" size={10} color="#4a4848" />
      </AnnotationIconWrapper>
    </CardFooter>
  </CardContainer>
);

export default AccountCard;
