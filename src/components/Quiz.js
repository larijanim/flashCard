import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from "react-native";
import {blue} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import { connect } from 'react-redux'
import Deck from "./Deck";


class Quiz extends Component {
    render() {
      const { deck_title , currQuestions } = this.props
   // console.log("qqqq"+JSON.stringify(currQuestions));

        return (
            <View style={styles.container}>

                <Text>you are in Quiz of {deck_title} +'\n'</Text>
                <ScrollView >

                    { currQuestions.map((q , i) => {
                        return (
                            <Text> key={i}  , {q.question} </Text>
                        );
                    })}

                </ScrollView>
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
        return deck.title === deck_title ;})[0];

    return {
        deck_title:deck_title,
        currQuestions: currDeck['questions']
    };
};

export default  connect(mapStateToProps)(Quiz);
