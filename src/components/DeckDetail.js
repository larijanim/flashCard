import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {blue , red , white , gray, green} from '../utils/colors';
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
                    <Text style={[styles.itemText, { color: white, fontSize: 16 }]}>{q_num} Card</Text>
                </View>
                <View style={{  justifyContent: 'center' }}>
                    <View style={{ marginTop: 5, marginBottom: 50}}>


                            <TouchableOpacity
                                style={[styles.buttonStyle,{  backgroundColor:'#766b73' }]}
                                activeOpacity = { .5 }
                                onPress={() => {navigation.push("CardNew", {
                                    deck_title: `${deck_title}`
                                })
                                }}
                            >

                                <Text style={styles.textBtn}> ADD CARD</Text>

                            </TouchableOpacity>



                    </View>
                    <View style={{ marginTop: 5, marginBottom: 50}}>
                            <TouchableOpacity
                                style={[styles.buttonStyle,{  backgroundColor:green }]}
                                activeOpacity = { .5 }
                                onPress={()=>this.handelQuizbtn(q_num , deck_title )}
                            >
                                <Text style={styles.textBtn}> START QUIZ</Text>

                            </TouchableOpacity>
                   </View>
                   <View style={{ marginTop: 5, marginBottom:200}}>
                        <TouchableOpacity
                            style={[styles.buttonStyle,{  backgroundColor:red }]}
                            activeOpacity = { .5 }
                            onPress= {()=>{
                                dispatch(handleDelDeck( `${deck_title}` ));
                                navigation.navigate("DeckList");}}
                         >
                            <Text style={styles.textBtn}> REMOVE DECK</Text>

                        </TouchableOpacity>

                    </View>
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
        padding: 5,
        paddingLeft: 15,
        paddingRight: 5,
        marginBottom: 10,
        borderRadius: 12,
        marginLeft:5,
        marginRight:5,
        width: 300,
    },
    itemText: {
        color: white,
        textAlign: 'center',
        fontSize: 22,

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
        marginLeft:25,
        marginRight:25,
        backgroundColor:'#766b73',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
       // width:150,
    },



});

export default connect()(DeckDetail);
