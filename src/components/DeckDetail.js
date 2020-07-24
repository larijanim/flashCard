import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {blue , red , white , gray} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import Quiz from "./Quiz";
import {handleDelDeck} from "../actions";
import { connect } from 'react-redux'


class DeckDetail extends Component {

    handelDELETE=( title)=>{
        const {dispatch ,  navigation} = this.props;
      //  dispatch(handleDelDeck( title ));
        console.log("dddddd"+ title);
     //   navigation.navigate("DeckList");

    }
    handelQuizbtn=(qLenght , deck_title) => {
        const { navigation} = this.props;
        if (qLenght>0) {
            navigation.navigate("Quiz", {
                deck_title: `${deck_title}`
            })
        }else{
            Alert.alert('No card');
            }


}
    render() {
        const { deck_title } = this.props.route.params
        const {q_num} = this.props.route.params
        const { dispatch, navigation } = this.props
        return (
            <View style={styles.container}>

                <View style={styles.item}>
                    <Text style={styles.itemText}>{deck_title}</Text>
                    <Text style={[styles.itemText, { color: gray, fontSize: 16 }]}>{q_num} Card</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Button
                        title={`Add Card`}
                        color="gray"
                        onPress={() => {navigation.push("CardNew", {
                            deck_title: `${deck_title}`
                        })
                        }}
                    />
                </View>
                <View style={{ marginTop: 5, marginBottom: 100}}>
                   <Button
                        title={`Start Quiz`}
                        onPress={()=>this.handelQuizbtn(q_num , deck_title )}
                   />
               </View>
                <View style={{ marginTop: 5, marginBottom: 100}}>
                    <Button
                        color={red}
                        title={`Remove Deck`}
                        onPress= {()=>{
                               dispatch(handleDelDeck( `${deck_title}` ));
                               navigation.navigate("DeckList");}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        alignItems: "center",
        paddingRight: 15,
        paddingLeft: 15
    },
    item: {
        backgroundColor: blue,
        padding: 20,
        paddingLeft: 60,
        paddingRight: 60,
        marginBottom: 10,
    },
    itemText: {
        color: white,
        textAlign: 'center',
        fontSize: 22,

    }
});

export default connect()(DeckDetail);
