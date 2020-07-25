import React, {Component} from 'react';
import {StyleSheet, Text, View ,TouchableOpacity,Alert, Button} from "react-native";
import {blue , white, gray} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import { handleNewDeck } from '../actions'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'




class DeckNew extends Component {
    state = {
        title: '',
        }


    handleTextChange = (title) => {
        this.setState({ title })
    }
    handleSubmit = () => {
        const {dispatch ,  navigation  } = this.props
        const {title } = this.state
        if (this.state.title === '') {
            Alert.alert("Text inputs are empty!");
        } else {
            const deck = {
                title: title,
                questions: [],
            }
            dispatch(handleNewDeck(deck))
            this.setState({title: ''})
            navigation.navigate(
                "DeckList"
            )

        }
    }



        render() {
            const { title } = this.state
        return (
            <View style={styles.container}>

                <Text style={styles.title}>Add a New Title:</Text>
                <TextInput
                    style={styles.TextInput}
                    value={title}
                    placeholder='Enter the name of the deck'
                    onChangeText={this.handleTextChange}
                />
                <TouchableOpacity
                    style={[styles.buttonStyle,{  backgroundColor:'#766b73' }]}
                    activeOpacity = { .5 }
                    onPress={this.handleSubmit}
                >

                    <Text style={styles.textBtn}> ADD DECK</Text>

                </TouchableOpacity>

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

    title: {
        fontSize: 28,
        color: blue,
        marginBottom: 50,
        marginTop: 15,
        fontWeight: 'bold',
        textAlign: "center"

    },
    TextInput: {
        width: 300,
        borderColor: gray,
        borderWidth: 2,
        padding: 8,
        borderRadius: 10,
        marginBottom: 15,

    },
    textBtn: {
        color: white,
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: 12,
    },
    buttonStyle: {

        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#766b73',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width:150,
    },


});

export default connect()(DeckNew);
