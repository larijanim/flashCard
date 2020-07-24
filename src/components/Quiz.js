import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, ScrollView } from "react-native";
import {blue , white} from '../utils/colors';
import {StatusBar} from "expo-status-bar";
import { connect } from 'react-redux'





class Quiz extends Component {


    state={
         currqestion:0,
        btnLable:'Answer',
        questionView:true,
        score:0,
        lastQuestion:false

    }


    handelNextbtn=()=>{
        this.setState((previousState)=> ({
        currqestion: previousState.currqestion+1

            }));
    }
    handelResetbtn=()=>{
        this.setState(()=> ({
            currqes:0 ,
            questionView:true,
            btnLable:'Answer',
            lastQuestion:false,
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
        }
    }


    render() {
      const { deck_title , questions , navigation } = this.props
        const {questionView , lastQuestion , btnLable , score}=this.state
   // console.log("qqqq"+JSON.stringify(questions));


        return (

            <View style={styles.container}>
                <Text>you are in Quiz of {deck_title} </Text>
                <Text>Current Score {score}/{questions.length} </Text>
                {!lastQuestion?
                 (
                      <View>
                        <Text>{questionView && questions[this.state.currqestion].question}
                            {!questionView && questions[this.state.currqestion].answer}
                        </Text>
                        <Button
                          title={`Show  ${btnLable}`}
                          onPress= {()=>this.handelShowbtn(!questionView)}/>
                    <Button
                    title={` Correct Answer`}
                    onPress= {()=>this.handelCorrectbtn()}/>
                    <Button
                        title={` Wrong Answer`}
                        onPress= {()=>this.handelInCorrectbtn()}/>

                    <Button
                        title={` Next Question`}
                        onPress= {()=>this.handelNextbtn()}/>
                      </View>
                    ):(
                      <View>
                      <Text> Your score is :{score}/{questions.length} </Text>
                     <Button
                     title={` Reset`}
                     onPress= {()=>this.handelResetbtn()}/>

                     <Button
                     title={` Back`}
                     onPress={() => {navigation.navigate("DeckDetail", { 
                         deck_title: `${deck_title}`,
                         q_num: `${questions.length}`,
                     })
                     }} />

                     </View>
                    )}

            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function mapStateToProps (state, {route}){
    const { deck_title , navigation } = route.params;
    const decksArr= Object.values(state);
    const currDeck=decksArr.filter(function (deck) {
        return deck.title === deck_title ;})[0];

    return {
        deck_title:deck_title,
        questions: currDeck['questions'],
        navigation

    };
};

export default  connect(mapStateToProps)(Quiz);
