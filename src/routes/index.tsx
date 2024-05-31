import React, {useContext} from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';
import {View, ActivityIndicator} from 'react-native';

export default function Routes() {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size={'large'} color={'#ffce00'}></ActivityIndicator>
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
