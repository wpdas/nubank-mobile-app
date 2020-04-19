import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CardContainer from '@components/CardContainer';
import { ThemeContext } from 'styled-components';
import { ThemeValue } from '@theme';
import {
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  ActiveButton,
  ActiveButtonText,
} from './styles';

const RewardsCard: React.FC = () => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);

  return (
    <CardContainer>
      <CardHeader>
        <Icon name="present" size={22} color={theme.tertiaryIconColor} />
      </CardHeader>
      <CardContent>
        <Title>Nubank Rewards</Title>
        <Description>
          Acumule pontos que nunca expiram e troque por passagens aéreas ou
          serviços que você realmente usa.
        </Description>
      </CardContent>
      <CardFooter>
        <ActiveButton>
          <ActiveButtonText>ATIVE O SEU REWARDS</ActiveButtonText>
        </ActiveButton>
      </CardFooter>
    </CardContainer>
  );
};

export default RewardsCard;
