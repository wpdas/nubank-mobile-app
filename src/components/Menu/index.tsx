import React from 'react';
import QRCode from 'react-native-qrcode-generator';

import {Container, Code} from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://www.linkedin.com/in/wenderson-pires-silva/"
          size={80}
          bgColor="#8b10ae"
          fgColor="#fff"
        />
      </Code>
    </Container>
  );
};

export default Menu;
