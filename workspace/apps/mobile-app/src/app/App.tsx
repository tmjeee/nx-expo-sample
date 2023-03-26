/* eslint-disable jsx-a11y/accessible-emoji */
import 'setimmediate';
import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import store from './store';
import {Provider, useDispatch} from "react-redux";
import {useAppDispatch} from "./hooks";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import {navigationRef} from "./navigation";


export const App = () => {
  return (
      <Provider store={store}>
        <AppEntry/>
      </Provider>
  );
};

export const AppEntry = () => {
  const dispatch = useAppDispatch();
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

/**
 *
 */

export default App;
