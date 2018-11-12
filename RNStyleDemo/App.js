/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>let's get started</Text>
                <Text style={styles.hello}>Hello World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'red'
    },
    instructions: {
        textAlign: 'center',
        color: 'blue',
        fontWeight:'bold',
        marginBottom: 5,
        fontSize: 30
    },

    hello:{
        fontSize:30,
        color:'#00ff00',
        fontWeight: 'bold'
    }
});
