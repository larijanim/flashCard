import React, {Component} from 'react';
import {StyleSheet, Text, View ,TouchableOpacity,Alert, Button} from "react-native";
import {blue , white, gray} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import { handleNewCard} from '../actions/index'
import { TextInput } from 'react-native-gesture-handler'
import { connect } from 'react-redux'



class CardNew extends Component {
    state = {question: '', answer:'' , toDeckDetail:false}

    handleQuestionChange = (question) => {
        this.setState({ question })
    }
    handleAnswerChange = (answer) => {
        this.setState({ answer })
    }
    handleSubmit = () => {
        const {route, navigation , dispatch} = this.props
        const { deck_title } = route.params
        const newCard = {
            question: this.state.question,
            answer: this.state.answer
        }

        if (this.state.question === '' || this.state.answer === '' ) {
            Alert.alert("fill out all !");
        } else {
            dispatch(handleNewCard( deck_title, newCard ))
            this.setState({question: ''})
            this.setState({answer: ''})
            navigation.navigate("DeckList");

        }
    }



    render() {
        const { deck_title } = this.props.route.params
      //  if(this.state.DeckDetail==true){ return (this.props.navigation.navigate('DeckDetail', {deck_title}))}
        const { question, answer } = this.state

        return (
            <View style={styles.container}>

                <Text style={styles.title}>Add a card to  "{deck_title}" </Text>
                <Text style={styles.itemText}>Question </Text>
                <TextInput
                    style={styles.TextInput}
                    value={question}
                    name='question'
                    placeholder='Enter your question'
                    onChangeText={this.handleQuestionChange}
                />
                <Text style={styles.itemText}>Answer </Text>
                <TextInput
                    style={styles.TextInput}
                    value={answer}
                    name='answer'
                    placeholder='Enter the answer'
                    onChangeText={this.handleAnswerChange}

                />
                <TouchableOpacity
                    style={[styles.buttonStyle,{  backgroundColor:'#766b73' }]}
                    activeOpacity = { .5 }
                    onPress={this.handleSubmit}
                >

                    <Text style={styles.textBtn}> ADD CARD</Text>

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
        fontSize: 27,
        color: blue,
        marginBottom:45,
        marginTop: 15,
        fontWeight: 'bold',
        textAlign: "center"

    },
    itemText: {
        color: gray,
        textAlign: 'center',
        fontSize: 22,

    },
    TextInput: {
        width: 300,
        borderColor: gray,
        borderWidth: 2,
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,

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

export default connect()(CardNew);

