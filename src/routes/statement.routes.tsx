import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import Statement from '../screens/Statement/Statement';
import PaySlip from '../screens/PaySlip/PaySlip';

export type RootStackParamsList = {
  StatementList: undefined;
  PaySlip: {
    itemId: string;
  };
};
const StatementStack = createStackNavigator<RootStackParamsList>();

export type PaySlipScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  'PaySlip'
>;

const StatementRoutes: React.FC = () => (
  <StatementStack.Navigator>
    <StatementStack.Screen
      name="StatementList"
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
