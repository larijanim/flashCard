import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, TouchableOpacity} from "react-native";
import {blue , white, gray , red , green} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';





class Quiz extends Component {


    state={
         currqestion:0,
        btnLable:'Answer',
        questionView:true,
        score:0,
        lastQuestion:false

    }


    handelResetbtn=()=>{
        this.setState(()=> ({
            currqestion:0 ,
            questionView:true,
            btnLable:'Answer',
            lastQuestion:false,
            score:0,
        }));

    }

    handelShowbtn=(qFace)=>{
        this.setState((previousState)=> ({
            questionView:qFace,
            btnLable:(qFace?`Answer`:`Question`)
        }));
    }
    handelCorrectbtn=()=>{
        const {  questions } = this.props
        const  qLenght=questions.length
        if(qLenght >(this.state.currqestion+1)){
        this.setState((previousState)=> ({
            currqestion: previousState.currqestion+1,
            score: previousState.score+1 ,
            questionView:true,
            btnLable:'Answer',
        }));
        }else if(qLenght ===(this.state.currqestion+1)){
            this.setState((previousState)=> ({
                lastQuestion:true,
                score: previousState.score+1 ,
            }));

            clearLocalNotification()
                .then(setLocalNotification);
        }
    }
    handelInCorrectbtn=()=>{
        const {  questions } = this.props
        const  qLenght=questions.length
        if(qLenght >(this.state.currqestion+1)){
            this.setState((previousState)=> ({
                currqestion: previousState.currqestion+1,
                questionView:true,
                btnLable:'Answer',
            }));
        }else if(qLenght ===(this.state.currqestion+1)){
            this.setState((previousState)=> ({
                lastQuestion:true,
            }));
            clearLocalNotification()
                .then(setLocalNotification);
        }
    }


    render() {
      const { deck_title , questions , navigation } = this.props
        const {questionView , lastQuestion , btnLable , score , currqestion}=this.state
   // console.log("qqqq"+JSON.stringify(questions));


        return (

            <View style={styles.container}>
                <Text style={styles.title}> {deck_title} </Text>
                <Text style={styles.title}>Question:{currqestion+1}/{questions.length}-Score {score}/{questions.length}  </Text>
                <Text> </Text>
                {!lastQuestion?
                 (
                      <View >
                        <Text style={[styles.itemText,!questionView &&{ backgroundColor:green}]}>
                             {questionView && questions[this.state.currqestion].question}
                            {!questionView && questions[this.state.currqestion].answer}
                        </Text>
                          <TouchableOpacity
                              style={[styles.buttonStyle,{  backgroundColor:gray }]}
                              activeOpacity = { .5 }
                              onPress= {()=>this.handelShowbtn(!questionView)}
                          >
                              <Text style={styles.textBtn}> Show {btnLable}</Text>

                          </TouchableOpacity>
                          <TouchableOpacity
                              style={[styles.buttonStyle,{  backgroundColor:green }]}
                              activeOpacity = { .5 }
                              onPress= {()=>this.handelCorrectbtn()}
                          >
                              <Text style={styles.textBtn}> Correct Answer</Text>

                          </TouchableOpacity>
                          <TouchableOpacity
                              style={[styles.buttonStyle,{  backgroundColor:red }]}
                              activeOpacity = { .5 }
                              onPress= {()=>this.handelInCorrectbtn()}
                          >
                              <Text style={styles.textBtn}> Wrong Answer</Text>

                          </TouchableOpacity>

                      </View>
                    ):(
                      <View>
                      <Text style={[styles.itemText ,{  backgroundColor:red }] }>Your score is : {score}/{questions.length} </Text>
                      <TouchableOpacity
                          style={[styles.buttonStyle,{  backgroundColor:red }]}
                          activeOpacity = { .5 }
                          onPress= {()=>this.handelResetbtn()}
                      >
                          <Text style={styles.textBtn}> RESET</Text>

                      </TouchableOpacity>

                      <TouchableOpacity
                          style={[styles.buttonStyle,{  backgroundColor:green }]}
                          activeOpacity = { .5 }
                          onPress={() => {navigation.navigate("DeckDetail", {
                              deck_title: `${deck_title}`,
                              q_num: `${questions.length}`,
                          })
                          }}
                      >
                          <Text style={styles.textBtn}> BACK</Text>

                      </TouchableOpacity>


                     </View>
                    )}

            </View>
        );
    };
};

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
        borderRadius: 12,
        width: 300,
        height: 300,
    },
    itemText: {
        color: white,
        textAlign: 'center',
        textAlignVertical:'center',
        fontSize: 20,
        backgroundColor: blue,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 10,
        borderRadius: 12,
        width: 300,
        height: 150,

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
        marginLeft:80,
        marginRight:80,
        backgroundColor:'gray',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width:150,
    },
    title: {
        fontSize: 14,
        color: blue,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: "center"

    },

});

function mapStateToProps (state, {route}){
    const { deck_title } = route.params;
    const decksArr= Object.values(state);
    const currDeck=decksArr.filter(function (deck) {
        return deck.title === deck_title ;})[0];

    return {
        deck_title:deck_title,
        questions: currDeck['questions'],


    };
};

export default  connect(mapStateToProps)(Quiz);
