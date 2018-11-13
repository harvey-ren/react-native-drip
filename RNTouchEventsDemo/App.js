/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Alert, View, TouchableHighlight, Text} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Button color={'red'} title={'press me'} onPress={() => {
                    Alert.alert('你点击了按钮');
                }}/>
                <TouchableHighlight
                    style={{
                        width: 200,
                        height: 40,
                        borderRadius: 30,
                        borderWidth: 1,
                        borderColor: 'blue',

                    }}
                    onPress={() => {
                        Alert.alert("我被点击了")
                    }}
                    onLongPress={() => {
                        Alert.alert("长按了")
                    }}
                    underlayColor="transparent"
                >
                    <View style={{
                        width: 200,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#00000000",
                    }}>
                        <Text style={{
                            color: 'blue',
                            fontSize: 18,
                        }}
                        >点击</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }
});
