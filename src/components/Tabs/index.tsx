import React from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

interface TabsProps {
  translateY: Animated.Value;
}

const Tabs: React.FC<TabsProps> = ({translateY}) => {
  const adjustLimitStyle = {
    transform: [{rotate: '-90deg'}],
    marginTop: -56,
    marginLeft: -54,
  };

  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="user-follow" size={22} color="#fafafa" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="screen-smartphone" size={22} color="#fafafa" />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="bubbles" size={22} color="#fafafa" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-down-circle" size={22} color="#fafafa" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-up-circle" size={22} color="#fafafa" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="equalizer"
            size={22}
            color="#fafafa"
            style={adjustLimitStyle}
          />
          <TabText>Ajustar limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="question" size={22} color="#fafafa" />
          <TabText>Me Ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="grid" size={22} color="#fafafa" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock-open" size={22} color="#fafafa" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={22} color="#fafafa" />
          <TabText>Cartão virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="list" size={22} color="#fafafa" />
          <TabText>Organizar atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
