import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Favourite from './Pages/Favourite/Favourite';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addFormLocalStore, addToFav } from '../Redux';

const Navigation = () => {
  const Dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Fav');
      if (value !== null) {
        const data = JSON.parse(value);
        Dispatch(addFormLocalStore({ list: data }));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Movies List' }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favourite"
          component={Favourite}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
