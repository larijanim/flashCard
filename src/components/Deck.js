import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'

// import { decks } from '../utils/data'
import { blue, gray, white } from '../utils/colors'
import DeckDetail from "./DeckDetail";




class Deck extends React.Component {
    render() {
        const { deck, navigation} = this.props
        const questionArr= deck[`questions`];
        const q_length=(questionArr== undefined )?0:questionArr.length;
        //console.log("vvvvvv"+JSON.stringify(questionArr));
        return (

            <TouchableOpacity>

                <Button
                    title={`${deck.title}`+` - `+`${q_length}`+ `Cards`}
                    headerbacktitle={`List`}
                    onPress={() => {navigation.push("DeckDetail", {
                        deck_title: `${deck.title}`,
                        q_num: `${q_length}`,
                    })

                    }}/>
                <Text style={[styles.itemText, { color: gray, fontSize: 16 }]}>{q_length} Cards</Text>
            </TouchableOpacity>

        )

    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: blue,
        fontSize: 30,
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
        fontSize: 22,

    }
})




export default connect()(Deck);
