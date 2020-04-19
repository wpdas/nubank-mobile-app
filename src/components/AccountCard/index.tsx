import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import CardContainer from '@components/CardContainer';
import { ThemeValue } from '@theme';
import { translate } from '@locale';
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

const AccountCard: React.FC = () => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);

  return (
    <CardContainer>
      <CardHeader>
        <IconContainer>
          <Icon name="wallet" size={22} color={theme.tertiaryIconColor} />
          <IconText>{translate('account')}</IconText>
        </IconContainer>
        <Icon name="eye" size={22} color={theme.tertiaryIconColor} />
      </CardHeader>
      <CardContent>
        <Title>{translate('available_balance')}</Title>
        <Description>R$ 1.439,17</Description>
      </CardContent>
      <CardFooter>
        <AnnotationIconWrapper>
          <Icon name="arrow-down-circle" size={22} color={theme.primaryColor} />
        </AnnotationIconWrapper>
        <Annotation>{translate('last_account_action_description')}</Annotation>
        <AnnotationIconWrapper>
          <Icon name="arrow-right" size={10} color={theme.tertiaryIconColor} />
        </AnnotationIconWrapper>
      </CardFooter>
    </CardContainer>
  );
};

export default AccountCard;
