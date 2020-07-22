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
                <TextInput
                    style={styles.TextInput}
                    value={question}
                    name='question'
                    placeholder='Enter your question'
                    onChangeText={this.handleQuestionChange}
                />
                <TextInput
                    style={styles.TextInput}
                    value={answer}
                    name='answer'
                    placeholder='Enter the answer'
                    onChangeText={this.handleAnswerChange}

                />

                <Button
                    title={`ADD`}
                    onPress={this.handleSubmit}/>

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
    TextInput: {
        width: 300,
        borderColor: gray,
        borderWidth: 2,
        padding: 8,
        borderRadius: 5,
        marginBottom: 20,

    },
});

export default connect()(CardNew);

