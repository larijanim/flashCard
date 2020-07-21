import React, {Component} from 'react';
import {StyleSheet, Text, View ,TouchableOpacity,Alert, Button} from "react-native";
import {blue , white, gray} from '../utils/colors';
import { connect } from 'react-redux'
import handleDelDeck from '../actions/index'
import {generateId} from "../utils/helpers";




class RemoveDeck extends Component {



componentDidMount() {
    const {dispatch , title} = this.props;
        dispatch(handleDelDeck(title ));



}
    render() {

        return (
            <View style={styles.container}>

           <Text>done</Text>
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
    TextInput: {
        width: 300,
        borderColor: gray,
        borderWidth: 2,
        padding: 8,
        borderRadius: 5,
        marginBottom: 20,

    },

    title: {
        fontSize: 27,
        color: blue,
        marginBottom: 40,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: "center"

    },
});


function mapStateToProps(state) {
    return {
        decks: state
    }
};

export default connect(mapStateToProps)(RemoveDeck);
