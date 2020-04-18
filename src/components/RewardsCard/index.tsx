import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardContainer from '@components/CardContainer';
import {
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  ActiveButton,
  ActiveButtonText,
} from './styles';

const RewardsCard = () => (
  <CardContainer>
    <CardHeader>
      <Icon name="present" size={22} color="#4a4848" />
    </CardHeader>
    <CardContent>
      <Title>Nubank Rewards</Title>
      <Description>
        Acumule pontos que nunca expiram e troque por passagens aéreas ou
        serviços que você realmente usa.
      </Description>
    </CardContent>
    <CardFooter>
      <ActiveButton onPress={() => {}}>
        <ActiveButtonText>ATIVE O SEU REWARDS</ActiveButtonText>
      </ActiveButton>
    </CardFooter>
  </CardContainer>
);

export default RewardsCard;
