import React, { useState, useContext } from 'react';
import { Animated, Easing, Platform, StyleSheet } from 'react-native';
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { ThemeContext } from 'styled-components';

import Header from '@components/Header';
import Tabs from '@components/Tabs';
import Menu from '@components/Menu';
import CreditCard from '@components/CreditCard';
import AccountCard from '@components/AccountCard';
import RewardsCard from '@components/RewardsCard';
import { ThemeValue } from '@theme';
import { Container, Content, Cards } from './styles';

export default function Main() {
  let offset = 0;
  const { current: theme } = useContext<ThemeValue>(ThemeContext);
  const [showCardsPagination, setShowCardsPagination] = useState<boolean>(true);
  const range = 460;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  /**
   * Handler gesture state
   */
  const onHandlerStateChanged = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setShowCardsPagination(Platform.OS === 'ios' ? false : true);
    }

    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? range : 0,
        duration: 200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? range : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
        if (offset === 0) {
          setShowCardsPagination(true);
        }
      });
    }
  };

  const swiperStyles = StyleSheet.create({
    container: {
      maxHeight: 425,
    },
    dotStyle: {
      width: 7,
      height: 7,
      backgroundColor: '#ffffff50',
    },
    activeDotStyle: {
      width: 7,
      height: 7,
    },
  });

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
          minDeltaY={12}>
          <Cards
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 460], // Mov limit range
                    outputRange: [-50, 0, 460], // Mov speed range
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Swiper
              loop={false}
              containerStyle={swiperStyles.container}
              activeDotColor={theme.secondaryColor}
              dotStyle={swiperStyles.dotStyle}
              activeDotStyle={swiperStyles.activeDotStyle}
              showsPagination={showCardsPagination}>
              <CreditCard />
              <AccountCard />
              <RewardsCard />
            </Swiper>
          </Cards>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
