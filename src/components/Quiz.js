import React, {Component} from 'react';
import {StyleSheet, Text, View , button} from "react-native";
import {blue} from '../utils/colors';
import {StatusBar} from "expo-status-bar";


class Quiz extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text>you are in Quiz</Text>
                <Button
                    title={`Show Answer`}/>
                <Button
                title={` Correct Answer`}/>
                <Button
                    title={` Wrong Answer`}/>
                <Button
                    title={` Show Question`}/>
                <Button
                    title={` Next Question`}/>
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

function mapStateToProps ({ decks }, {route}){
    const { deckId } = route.params;
    return {
        deck: decks[deckId]
    };
};

export default  connect(mapStateToProps)(Quiz);
