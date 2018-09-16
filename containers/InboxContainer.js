import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from "react-native"

export default class InboxContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Inbox',
        }
    }

    render() {
        return <View style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
            >
                {list.map((value, index) => {
                    return <View 
                        key={index}
                        style={styles.card}>
                        <Text>{value}</Text>
                    </View>
                })

                }
            </ScrollView>
        </View>
    }
}

const list = ['a','b','c','d','e','f']

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
    },
    card: {
        backgroundColor: 'white', 
        height: 100,
        flex: 1,
        marginBottom: 10,
    }
})
