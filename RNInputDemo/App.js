/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({text})}
                    placeholder={'input here'}/>
                <Text>{this.state.text.split(' ').map((word) => word && '😝').join('')}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 20,
        padding: 15
    },
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    textStyle: {
        fontSize: 20,
        padding:15
    }
});
