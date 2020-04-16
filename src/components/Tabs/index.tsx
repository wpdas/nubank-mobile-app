import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styles';

Icon.loadFont();

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="smartphone" size={24} color="#FFF" />
          <TabText>Recarga de celular</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="tune" size={24} color="#FFF" />
          <TabText>Ajustar limite</TabText>
        </TabItem>
        <TabItem>
          <Icon name="help-outline" size={24} color="#FFF" />
          <TabText>Me Ajuda</TabText>
        </TabItem>
        <TabItem>
          <Icon name="attach-money" size={24} color="#FFF" />
          <TabText>Pagar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear cartão</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={24} color="#FFF" />
          <TabText>Cartão virtual</TabText>
        </TabItem>
        <TabItem>
          <Icon name="sort" size={24} color="#FFF" />
          <TabText>Organizar atalhos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
