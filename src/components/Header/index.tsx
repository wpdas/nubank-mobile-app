import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import { ThemeValue } from '@theme';
import { Container, Top, Logo, Title } from './styles';
import logo from '@assets/images/Nubank_Logo.png';

const Header: React.FC = () => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);

  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Wenderson</Title>
      </Top>
      <Icon name="arrow-down" size={12} color={theme.primaryIconColor} />
    </Container>
  );
};

export default Header;
