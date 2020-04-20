import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import CardContainer from '@components/CardContainer';
import { ThemeValue } from '@theme';
import { translate } from '@locale';
import {
  CreditCardMainContent,
  CreditCardInfoArea,
  CreditCardUsageBar,
  FutureExpenses,
  CurrentExpenses,
  CurrentLimit,
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
      <CreditCardMainContent>
        <CreditCardInfoArea>
          <CardHeader>
            <IconContainer>
              <Icon
                name="credit-card"
                size={22}
                color={theme.tertiaryIconColor}
              />
              <IconText>{translate('credit_card')}</IconText>
            </IconContainer>
          </CardHeader>
          <CardContent>
            <Title>{translate('current_invoice')}</Title>
            <Description>
              R$ <DescriptionStrong>714</DescriptionStrong>,75
            </Description>
            <SubTitle>
              {translate('available_limit')}{' '}
              <SubTitleStrong>R$ 126,17</SubTitleStrong>
            </SubTitle>
          </CardContent>
        </CreditCardInfoArea>
        <CreditCardUsageBar>
          <FutureExpenses area={40} />
          <CurrentExpenses area={40} />
          <CurrentLimit area={20} />
        </CreditCardUsageBar>
      </CreditCardMainContent>
      <CardFooter>
        <AnnotationIconWrapper>
          <Icon name="cup" size={22} color={theme.primaryTextColor} />
        </AnnotationIconWrapper>
        <Annotation>{translate('recent_buy_description')}</Annotation>
        <AnnotationIconWrapper>
          <Icon name="arrow-right" size={10} color={theme.tertiaryIconColor} />
        </AnnotationIconWrapper>
      </CardFooter>
    </CardContainer>
  );
};

export default CreditCard;
