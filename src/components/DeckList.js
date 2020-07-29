import React, {Component} from 'react';
import {StyleSheet, Text, View , ScrollView, Animated,
    TouchableOpacity} from "react-native";
import {blue, white} from "../utils/colors";
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
            return <Text style={styles.title}>No decks yet</Text>
        }
        const decksArr= Object.values(decks);

        return (
            <View >
                <Text style={styles.title}>LIST of DECKS</Text>

                { decksArr.map((deck ,i) => {
                    return (
                        <Deck key={i} deck={deck} navigation={this.props.navigation} />

                    );
                })}

            </View>
        );
    }
}







const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#fff',
       // alignItems: 'center',
       // justifyContent: 'center',
    },

    item: {
        backgroundColor: blue,
        padding: 20,
        paddingLeft: 60,
        paddingRight: 60,
        marginBottom: 10,
        borderRadius: 12,
        width: 300,
    },
    itemText: {
        color: white,
        textAlign: 'center',
        fontSize: 22,

    },
    btn: {
        backgroundColor: "#480032",
        width: 100,
        height: 40,
        padding: 3,
        justifyContent: "center",
        borderRadius: 6
    },
    title: {
        fontSize: 28,
        color: blue,
        marginBottom: 50,
        marginTop: 30,
        fontWeight: 'bold',
        textAlign: "center"

    },

});

function mapStateToProps(state) {
    return {
        decks: state
    }
};

export default connect(mapStateToProps)(DeckList);
