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

});


function mapStateToProps(state) {
    return {
        decks: state
    }
};

export default connect(mapStateToProps)(RemoveDeck);
