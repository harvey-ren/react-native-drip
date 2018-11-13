/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, SectionList,StyleSheet, Text, View} from 'react-native';

type Props = {};

class ItemDivideComponent extends Component {
    render() {
        return (<View style={{
            flex: 1,
            alignItems: 'stretch',
            height: 0.3, backgroundColor: '#333333'
        }}/>);
    }
}

export default class App extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ItemSeparatorComponent={ItemDivideComponent}
                    horizontal={false}
                    data={[{key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'}]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>

                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    ItemSeparatorComponent={ItemDivideComponent}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 30,
        color: '#000000'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
