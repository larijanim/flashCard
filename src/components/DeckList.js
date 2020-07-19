import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {blue} from "../utils/colors";
import {StatusBar} from "expo-status-bar";
import { Button } from 'react-native';



class DeckList extends Component {
    render() {

        return (
            <View style={styles.container}>

                <Text
                    onPress={() =>
                    this.props.navigation.navigate("DeckDetail")
                }>Click to see detail </Text>
                <Text
                    onPress={() =>
                        this.props.navigation.navigate("DeckDetail")
                    }>Click to Add Deck</Text>
                <Button
                    title={`Go to DeckDetail`}
                    onPress={() => this.props.navigation.navigate("DeckDetail")
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DeckList;
