import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import CardContainer from '@components/CardContainer';
import { ThemeValue } from '@theme';
import { translate } from '@locale';
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
        <Title>{translate('nubank_rewards_title')}</Title>
        <Description>{translate('nubank_rewards_description')}</Description>
      </CardContent>
      <CardFooter>
        <ActiveButton>
          <ActiveButtonText>
            {translate('nubank_rewards_actionButton')}
          </ActiveButtonText>
        </ActiveButton>
      </CardFooter>
    </CardContainer>
  );
};

export default RewardsCard;
