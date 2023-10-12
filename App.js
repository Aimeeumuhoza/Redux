import React from 'react';
import { StyleSheet, View } from 'react-native';
import Add from "./src/addData"
import Navigator from "./Route/homeStack"
import store from "./Redux/store"
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
    <Add/>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
