import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React from 'react';
import {Image, View} from 'react-native';

type CustomDrawerProps = DrawerContentComponentProps;

const Drawer: React.FC<CustomDrawerProps> = (props: CustomDrawerProps) => {
  return (
    <View>
      <Image source={require('../../assets/Logo-Compass.png')}></Image>
    </View>
  );
};

export default Drawer;
