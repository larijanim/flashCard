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
                }>Click to see detailver1 </Text>
                <Text
                    onPress={() =>
                        this.props.navigation.navigate("DeckDetail")
                    }>Click to detail ver2 </Text>
                <Button
                    title={`Button Go to DeckDetail`}
                    onPress={() => this.props.navigation.push("DeckDetail")
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
