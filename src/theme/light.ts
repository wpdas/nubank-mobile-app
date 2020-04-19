import { Platform } from 'react-native';
import { Theme } from '.';

const light: Theme = {
  /* Nubank  background: #6d2177; */
  primaryColor: '#832a9a',
  secondaryColor: '#ffffff',
  tertiaryColor: '#f5f5f5',
  primaryIconColor: '#ffffff',
  secondaryIconColor: '#fafafa',
  tertiaryIconColor: '#7e7e7e',
  primaryTextColor: '#333333',
  secondaryTextColor: '#ffffff',
  tertiaryTextColor: '#7e7e7e',
  regularFont:
    Platform.OS === 'ios' ? 'NunitoSans-Regular' : 'NunitoSans-Regular.ttf',
  lightFont:
    Platform.OS === 'ios' ? 'NunitoSans-Light' : 'NunitoSans-Light.ttf',
  semiBoldFont:
    Platform.OS === 'ios' ? 'NunitoSans-SemiBold' : 'NunitoSans-SemiBold.ttf',
  boldFont: Platform.OS === 'ios' ? 'NunitoSans-Bold' : 'NunitoSans-Bold.ttf',
  blackFont:
    Platform.OS === 'ios' ? 'NunitoSans-Black' : 'NunitoSans-Black.ttf',
};

export default light;
