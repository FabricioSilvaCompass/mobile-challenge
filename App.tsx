import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {AuthProvider} from './src/contexts/auth';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
