import React, { Component } from 'react';

import TouchableScale from "react-native-touchable-scale";
import { StyleSheet, Text } from "react-native";


const ScalingButton = (props) => {


    function getContent() {
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{ props.label }</Text>;
    }

    return (
        <TouchableScale
            style={styles.button}
            onPress={props.onPress}
            activeScale={0.7}
        >
            {getContent()}
        </TouchableScale>
    );



}


const styles = StyleSheet.create({
    default_button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderWidth: 1,
        borderColor: '#2e36d2',
        margin: 20,
        backgroundColor:'#2506d2',
        borderRadius:10,
    },
});

export default ScalingButton;
