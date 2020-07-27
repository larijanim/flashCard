import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./src/components/DeckList"
import DeckDetail from "./src/components/DeckDetail";
import {blue} from "./src/utils/colors";
import Navigation from "./src/setting/NavSet";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux'
//import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './src/reducers'
import middleware from './src/middleware'
import { createStore } from 'redux'


class App extends Component {


   // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.All;

  render() {
    const store = createStore(reducer, middleware )
     // composeWithDevTools()
    return (
        <Provider store={store}>

          <Navigation/>

        </Provider>
    );
  }

}



export default (App);
