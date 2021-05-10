import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cart, Home} from '../../container';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const MenuBottom = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Cart}
        options={{
          tabBarLabel: 'Updates',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuBottom;
