import {Provider} from "react-redux";
import store from "./store";
import React from "react";
import {View, Text} from 'react-native';

const AppSimple = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Provider>
  );
};

export default AppSimple;
