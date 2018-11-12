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
            <View style={{flex: 1}}>
                <View style={styles.view1style}/>
                <View style={styles.view2style}/>
                <View style={styles.view3style}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view1style: {
        width: 10,
        height: 50,
        backgroundColor: 'blue',
        marginTop: 40,
        flex: 1
    },
    view2style: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue',
        flex: 2
    },
    view3style: {
        width: 150,
        height: 150,
        backgroundColor: 'steelblue',
        flex: 3
    }
});
