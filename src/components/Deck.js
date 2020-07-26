import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button, Animated} from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'

// import { decks } from '../utils/data'
import { blue, gray, white } from '../utils/colors'
import DeckDetail from "./DeckDetail";




class Deck extends React.Component {

    state = {
        fadeValue: new Animated.Value(0)
    };

    _start = () => {
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,

        }).start();
    };
    componentDidMount() {
        this._start();
    }


    render() {
        const { deck, navigation} = this.props
        const questionArr= deck[`questions`];
        const q_length=(questionArr== undefined )?0:questionArr.length;
        //console.log("vvvvvv"+JSON.stringify(questionArr));
        return (

            <TouchableOpacity>

                <Animated.View
                    style={{
                        opacity: this.state.fadeValue,
                        height: 100,
                       // width:330,
                        marginLeft: 10,
                        marginRight: 10,
                        marginBottom: 10,
                        marginTop: 20,
                        borderRadius: 12,
                        backgroundColor: "blue",
                        justifyContent: "center",
                    }}

                   >
                    <Text style={styles.text}
                          onPress={() => {navigation.navigate("DeckDetail", {
                              deck_title: `${deck.title}`,
                              q_num: `${q_length}`,
                          })

                          }}> {`${deck.title}`+` - `+`${q_length}`+ `Cards`}</Text>

                </Animated.View>


            </TouchableOpacity>

        )

    }
}

const styles = StyleSheet.create({
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

})




export default connect()(Deck);
