import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Container, Top, Logo, Title} from './styles';
import logo from '@assets/Nubank_Logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Wenderson</Title>
      </Top>
      <Icon name="arrow-down" size={12} color="#FFF" />
    </Container>
  );
};

export default Header;
