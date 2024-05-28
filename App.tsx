import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Login from './src/screens/Login/Login';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.App}>
      <Login></Login>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
  },
});

export default App;
