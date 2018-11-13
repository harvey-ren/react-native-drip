/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, Image, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <ScrollView>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <View style={styles.images}>
                    <Image
                        source={{
                            uri: "https://facebook.github.io/react-native/img/favicon.png",
                            width: 80,
                            height: 80
                        }}/>
                </View>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <View style={styles.images}>
                    <Image
                        source={{
                            uri: "https://facebook.github.io/react-native/img/favicon.png",
                            width: 80,
                            height: 80
                        }}/>
                </View>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <View style={styles.images}>
                    <Image
                        source={{
                            uri: "https://facebook.github.io/react-native/img/favicon.png",
                            width: 80,
                            height: 80
                        }}/>
                </View>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <View style={styles.images}>
                    <Image
                        source={{
                            uri: "https://facebook.github.io/react-native/img/favicon.png",
                            width: 80,
                            height: 80
                        }}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    images: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 40,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
