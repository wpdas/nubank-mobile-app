import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import Theme, { themes } from './theme';
import { LocaleProvider } from '@locale';

const App: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor={themes.light.primaryColor}
    />
    <Theme>
      <LocaleProvider>
        <Routes />
      </LocaleProvider>
    </Theme>
  </>
);

export default App;
