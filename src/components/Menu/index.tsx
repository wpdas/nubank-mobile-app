import React, { useContext } from 'react';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import { ThemeValue } from '@theme';
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
} from './styles';

interface MenuProps {
  translateY: Animated.Value;
}

const Menu: React.FC<MenuProps> = ({ translateY }) => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);

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
          Banco <InfoTextStrong>260 - Nu pagamentos S.A.</InfoTextStrong>{' '}
        </InfoText>
        <InfoText>
          Agência <InfoTextStrong>0001</InfoTextStrong>
        </InfoText>
        <InfoText>
          Conta <InfoTextStrong>123456-1</InfoTextStrong>
        </InfoText>
      </AccountInfo>

      <Nav>
        <NavItem>
          <IconNavTextWrapper>
            <Icon name="question" size={20} color={theme.primaryIconColor} />
            <NavText>Me ajuda</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItem>
        <NavItem>
          <IconNavTextWrapper>
            <Icon name="user" size={20} color={theme.primaryIconColor} />
            <NavText>Perfil</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItem>
        <NavItem>
          <IconNavTextWrapper>
            <Icon name="credit-card" size={20} color={theme.primaryIconColor} />
            <NavText>Configurar Cartão</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItem>
        <NavItem>
          <IconNavTextWrapper>
            <Icon
              name="screen-smartphone"
              size={20}
              color={theme.primaryIconColor}
            />
            <NavText>Configurações do app</NavText>
          </IconNavTextWrapper>
          <Icon name="arrow-right" size={10} color={theme.primaryIconColor} />
        </NavItem>
      </Nav>

      <SignOutButton>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Menu;
