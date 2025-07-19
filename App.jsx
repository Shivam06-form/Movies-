import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './Redux';

const App = () => {
  return (
    <View style={[{ flex: 1 }]}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
