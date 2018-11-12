/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1style}/>
                <View style={styles.view2style}/>
                <View style={styles.view3style}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 40,
        flexDirection: 'row',
        alignItems:'stretch',
        backgroundColor: '#F5FCFF',
    },
    view1style: {
        fontSize: 20,
        width: 50,
        backgroundColor: '#00dd00'
    },
    view2style: {
        backgroundColor: '#dddd00',
        width: 50,
        height: 50
    },
    view3style: {
        backgroundColor: '#00dddd',
        width: 50,
        height: 50
    },
});
