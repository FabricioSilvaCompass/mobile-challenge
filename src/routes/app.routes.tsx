import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Statement from '../screens/Statement/Statement';
import StatementRoutes from './statement.routes';
import Profile from '../screens/Profile/Profile';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

type DrawerNavigation = {
  Home: undefined;
};

export type DrawerTypes = NativeStackNavigationProp<DrawerNavigation>;

const AppDrawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Home" component={Dashboard} />
    <AppDrawer.Screen name="Statement" component={StatementRoutes} />
    <AppDrawer.Screen name="Profile" component={Profile} />
  </AppDrawer.Navigator>
);
export default AppRoutes;
