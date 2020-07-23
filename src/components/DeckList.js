import React, {Component} from 'react';
import {StyleSheet, Text, View , ScrollView} from "react-native";
import {blue} from "../utils/colors";
import {StatusBar} from "expo-status-bar";
import { Button } from 'react-native';
import {connect} from "react-redux";
import Deck from "./Deck"
import { handleInitialData } from '../actions/index'

class DeckList extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())

    }
    render() {
        const { decks } = this.props
        if (!decks) {
            return <Text>No decks yet</Text>
        }
        const decksArr= Object.values(decks);
       // console.log("dddddd"+JSON.stringify(decks));
        return (
            <ScrollView >

                { decksArr.map((deck ,i) => {
                    return (
                        <Deck key={i} deck={deck} navigation={this.props.navigation} />
                    );
                })}

            </ScrollView>
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

function mapStateToProps(state) {
    return {
        decks: state
    }
};

export default connect(mapStateToProps)(DeckList);
