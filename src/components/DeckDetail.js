import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {blue} from '../utils/colors';
import {StatusBar} from "expo-status-bar";


class DeckDetail extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text>DeckDetail</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default DeckDetail;
