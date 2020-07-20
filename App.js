import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./src/components/DeckList"
import DeckDetail from "./src/components/DeckDetail";
import {blue} from "./src/utils/colors";
import Navigation from "./src/setting/NavSet";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (

    <Navigation style={styles.container}/>

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


