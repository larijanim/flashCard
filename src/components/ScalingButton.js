import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Animated,
    Easing,
    TouchableWithoutFeedback
} from 'react-native';

var scaleValue = new Animated.Value(0);



const ScalingButton = (props) => {

    const buttonScale = scaleValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.1, 1.2]
    });
    function getContent() {
        if(props.children){
            return props.children;
        }
        return <Text style={props.styles.label}>{ props.label }</Text>;
    }

    return (
        <TouchableWithoutFeedback

                                  onPressIn={() => {
                                      scaleValue.setValue(0);
                                      Animated.timing(scaleValue, {
                                          toValue: 2,
                                          duration: 250,
                                          easing: Easing.linear,
                                          useNativeDriver: true
                                      }).start();


                                  }}
                                  onPressOut={() => {
                                      Animated.timing(scaleValue, {
                                          toValue: 0,
                                          duration: 100,
                                          easing: Easing.linear,
                                          useNativeDriver: true
                                      }).start();
                                      props.onPress();
                                  }}
        >
            <Animated.View style={[
                props.noDefaultStyles ? styles.default_button : styles.button,
                props.styles ? props.styles.button : '',
                {
                    transform: [
                        {scale: buttonScale}
                    ]
                }
            ]}
            >
                { getContent() }
            </Animated.View>
        </TouchableWithoutFeedback>
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
        borderColor: '#eee',
        margin: 20
    },
});

export default ScalingButton;
