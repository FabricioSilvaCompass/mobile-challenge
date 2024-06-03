import React from 'react';
import Dashboard from '../screens/Dashboard/Dashboard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StatementRoutes from './statement.routes';
import Profile from '../screens/Profile/Profile';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import Icon from 'react-native-vector-icons/AntDesign';
import Drawer from '../components/Drawer/Drawer';

const HomeIcon = ({focused, size, color}: any) => (
  <Icon name="home" size={size} color={color}></Icon>
);
const StatementIcon = ({focused, size, color}: any) => (
  <Icon name="profile" size={size} color={color}></Icon>
);
const ProfileIcon = ({focused, size, color}: any) => (
  <Icon name="user" size={size} color={color}></Icon>
);
type DrawerNavigation = {
  Home: undefined;
};

export type DrawerTypes = NativeStackNavigationProp<DrawerNavigation>;

const AppDrawer = createDrawerNavigator();
// props => <Drawer {...props}></Drawer>drawerContent={}
const AppRoutes: React.FC = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen
      name="Home"
      component={Dashboard}
      options={{drawerIcon: HomeIcon}}
    />
    <AppDrawer.Screen
      name="Statement"
      component={StatementRoutes}
      options={{drawerIcon: StatementIcon}}
    />
    <AppDrawer.Screen
      name="Profile"
      component={Profile}
      options={{drawerIcon: ProfileIcon}}
    />
  </AppDrawer.Navigator>
);
export default AppRoutes;
