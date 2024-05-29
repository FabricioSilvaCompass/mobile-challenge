import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';

const AppDrawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Home" component={Dashboard} />
  </AppDrawer.Navigator>
);
export default AppRoutes;
