import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, Animated } from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'

// import { decks } from '../utils/data'
import { blue, gray, white } from '../utils/colors'
import DeckDetail from "./DeckDetail";
import ScalingButton from "./ScalingButton";




class Deck extends React.Component {

    state = {
        fadeValue: new Animated.Value(0)
    };

    componentDidMount() {

    }

    render() {
        const { deck, navigation} = this.props
        const questionArr= deck[`questions`];
        const q_length=(questionArr== undefined )?0:questionArr.length;

        return (

            <View style={styles.container}>

                    <ScalingButton
                        label={`${deck.title}`+` - `+`${q_length}`+ `Cards`}
                        onPress={() => {navigation.navigate("DeckDetail", {
                            deck_title: `${deck.title}`,
                            q_num: `${q_length}`,
                        })

                        }}
                        styles={{button: styles.animated_button, label: styles.button_label}} />

                </View>



        )

    }
}

const styles = StyleSheet.create({

        container: {
            flex: 1,
            flexDirection: 'column',
            padding: 30
        },
    title: {
        textAlign: "center",
        color: blue,
        fontSize: 20,
        marginBottom: 60,
        marginTop: 20,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: blue,
        padding: 20,
        paddingLeft: 60,
        paddingRight: 60,
        marginBottom: 20,
        width: 300,

    },
    itemText: {
        color: white,
        textAlign: 'center',
        fontSize: 18,

    },
    text: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
    animated_button: {
        backgroundColor: 'blue',
        borderRadius:10
    },
    button_label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }

})




export default connect()(Deck);
