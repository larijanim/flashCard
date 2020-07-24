import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView} from "react-native";
import {blue , white} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import { connect } from 'react-redux'





class CardBack extends Component {





    render() {
   //     const { deck_title , questions } = this.props



        return (
            <View style={styles.container}>

                <Text>you are in Back  of +'\n'</Text>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
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
        questions: currDeck['questions']
    };
};

export default  connect(mapStateToProps)(CardBack);
