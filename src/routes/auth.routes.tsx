import React from 'react';
import Login from '../screens/Login/Login';

import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/SignUp/SignUp';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

const AuthStack = createStackNavigator();

type StackNavigation = {
  Login: undefined;
  SignUp: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;
