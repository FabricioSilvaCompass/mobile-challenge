import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import Statement from '../screens/Statement/Statement';
import PaySlip from '../screens/PaySlip/PaySlip';

const StatementStack = createStackNavigator();

type StackNavigation = {
  PaySlip: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const StatementRoutes: React.FC = () => (
  <StatementStack.Navigator>
    <StatementStack.Screen
      name="Statement List"
      component={Statement}
      options={{headerShown: false}}
    />
    <StatementStack.Screen
      name="PaySlip"
      component={PaySlip}
      options={{headerShown: false}}
    />
  </StatementStack.Navigator>
);

export default StatementRoutes;
