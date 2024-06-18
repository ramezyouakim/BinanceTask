import * as React from 'react';

import {observer} from 'mobx-react';

import {routes} from './routes';
import HomeScreen from '../screens/main/Home/HomeScreen';
import ProfileScreen from '../screens/main/User/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketDataScreen from '../screens/main/MarketData/MarketDataScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator detachInactiveScreens={true}>
      <Tab.Screen
        name={routes.main.home}
        component={HomeScreen}
        options={{lazy: true, title: 'Dashboard'}}
      />
      <Tab.Screen
        name={routes.main.marketData}
        component={MarketDataScreen}
        options={{lazy: true, title: 'Market Data'}}
      />
      <Tab.Screen
        name={routes.main.userProfile}
        component={ProfileScreen}
        options={{lazy: true, title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default observer(MainNavigator);
