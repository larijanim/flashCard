import React, {Component} from 'react';
import {StyleSheet, Text, View , Button} from "react-native";
import {blue} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import { connect } from 'react-redux'


class Quiz extends Component {
    render() {
        const { questions} = this.props.deck
     console.log("qqqq"+JSON.stringify(questions));

        return (
            <View style={styles.container}>

                <Text>you are in Quiz of </Text>
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

function mapStateToProps (state, {route}){
    const { deck_title } = route.params;

    const decksArr= Object.values(state);
    const currDeck=decksArr.filter(function (deck) {
        return deck.title === deck_title ;
    })
    console.log("currDeck"+JSON.stringify(currDeck));
    console.log("questions"+currDeck['questions']);
    return {

        deck: currDeck
    };
};

export default  connect(mapStateToProps)(Quiz);
