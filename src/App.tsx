import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Theme, { themes } from './theme';

const App: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor={themes.light.primaryColor}
    />
    <Theme>
      <Routes />
    </Theme>
  </>
);

export default App;
