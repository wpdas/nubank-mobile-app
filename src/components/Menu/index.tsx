import React, { useContext } from 'react';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import { ThemeValue } from '@theme';
import LocaleContext, { LocaleContextValue, translate } from '@locale';
import {
  Container,
  Code,
  AccountInfo,
  InfoText,
  InfoTextStrong,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
  IconNavTextWrapper,
  NavItemTouchableButton,
} from './styles';

interface MenuProps {
  translateY: Animated.Value;
}

const Menu: React.FC<MenuProps> = ({ translateY }) => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);
  const { toggleLanguage } = useContext<LocaleContextValue>(LocaleContext);

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://www.linkedin.com/in/wenderson-pires-silva/"
          size={80}
          color={theme.primaryColor}
          backgroundColor={theme.secondaryColor}
        />
      </Code>

      <AccountInfo>
        <InfoText>
          {translate('bank')}{' '}
          <InfoTextStrong>260 - Nu pagamentos S.A.</InfoTextStrong>{' '}
        </InfoText>
        <InfoText>
          {translate('agency')} <InfoTextStrong>0001</InfoTextStrong>
        </InfoText>
        <InfoText>
          {translate('bank_account')} <InfoTextStrong>123456-1</InfoTextStrong>
        </InfoText>
      </AccountInfo>

      <Nav>
        <NavItem>
          <IconNavTextWrapper>
            <Icon name="question" size={20} color={theme.primaryIconColor} />
            <NavText>{translate('help')}</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItem>
        <NavItem>
          <IconNavTextWrapper>
            <Icon name="user" size={20} color={theme.primaryIconColor} />
            <NavText>{translate('profile')}</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItem>
        <NavItem>
          <IconNavTextWrapper>
            <Icon name="credit-card" size={20} color={theme.primaryIconColor} />
            <NavText>{translate('configure_card')}</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItem>
        <NavItemTouchableButton onPress={toggleLanguage}>
          <IconNavTextWrapper>
            <Icon name="globe" size={20} color={theme.primaryIconColor} />
            <NavText>{translate('change_language')}</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItemTouchableButton>
      </Nav>

      <SignOutButton>
        <SignOutButtonText>{translate('sign_out')}</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Menu;
