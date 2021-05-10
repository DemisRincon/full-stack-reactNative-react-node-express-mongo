import {Cart, Home, Login} from '../../../container';

import Header from './Header';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export const Stack = createStackNavigator();

const listScreens = [
  {name: 'Home', component: Home, menu: true},
  {name: 'Login', component: Login, menu: false},
  {name: 'Cart', component: Cart, menu: false},
];

const routerList = listScreens.map(({name, component, menu}) => {
  return (
    <Stack.Screen
      key={name}
      name={name}
      component={component}
      options={{
        header: ({navigation}) => <Header menu={menu} {...navigation} />,
        animationEnabled: true,
        animationTypeForReplace: 'pop',
      }}
    />
  );
});
export const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>{routerList}</Stack.Navigator>
    </NavigationContainer>
  );
};
