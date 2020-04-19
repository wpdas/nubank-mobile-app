import React, { useContext } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ThemeContext } from 'styled-components';
import { ThemeValue } from '@theme';
import { translate } from '@locale';
import { Container, TabsContainer, TabItem, TabText } from './styles';

interface TabsProps {
  translateY: Animated.Value;
}

const Tabs: React.FC<TabsProps> = ({ translateY }) => {
  const { current: theme } = useContext<ThemeValue>(ThemeContext);

  const adjustLimitStyle = {
    transform: [{ rotate: '-90deg' }],
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
          <Icon name="user-follow" size={22} color={theme.secondaryIconColor} />
          <TabText>{translate('invite_friends')}</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="screen-smartphone"
            size={22}
            color={theme.secondaryIconColor}
          />
          <TabText>{translate('phone_recharge')}</TabText>
        </TabItem>
        <TabItem>
          <Icon name="bubbles" size={22} color={theme.secondaryIconColor} />
          <TabText>{translate('cash_in')}</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="arrow-down-circle"
            size={22}
            color={theme.secondaryIconColor}
          />
          <TabText>{translate('deposit')}</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="arrow-up-circle"
            size={22}
            color={theme.secondaryIconColor}
          />
          <TabText>{translate('transfer')}</TabText>
        </TabItem>
        <TabItem>
          <Icon
            name="equalizer"
            size={22}
            color={theme.secondaryIconColor}
            style={adjustLimitStyle}
          />
          <TabText>{translate('adjust_limit')}</TabText>
        </TabItem>
        <TabItem>
          <Icon name="question" size={22} color={theme.secondaryIconColor} />
          <TabText>{translate('help')}</TabText>
        </TabItem>
        <TabItem>
          <Icon name="grid" size={22} color={theme.secondaryIconColor} />
          <TabText>{translate('pay')}</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock-open" size={22} color={theme.secondaryIconColor} />
          <TabText>{translate('block_card')}</TabText>
        </TabItem>
        <TabItem>
          <Icon name="credit-card" size={22} color={theme.secondaryIconColor} />
          <TabText>{translate('virtual_card')}</TabText>
        </TabItem>
        <TabItem>
          <Icon name="list" size={22} color={theme.secondaryIconColor} />
          <TabText>{translate('organize_shortcuts')}</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
