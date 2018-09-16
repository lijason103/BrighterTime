import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from "react-native"
import { List, ListItem } from 'react-native-elements'

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
                {list.map((l) => (
                   <ListItem
                   		roundAvatar
                   		Image avatar = {l.url}
                   		key = {l.name}
                   		title = {l.name}
                   		subtitle = {l.subtitle}
                   	/>

                ))

                }
            </ScrollView>
        </View>
    }
}

const list = [

	{
		name: 'Doctor Ana',
		subtitle: 'Please contact me, so I can help you',
		url: require('../Assets/Avatars/doctor_ana.jpg')
	},

	{
		name: 'Doctor Peter',
		subtitle: 'Please contact me, so I can help you',
		url: require('../Assets/Avatars/doctor_peter.png')
	},

	{
		name: 'Doctor Phil',
		subtitle: 'Please contact me, so I can help you',
		url: require('../Assets/Avatars/doctor_phil.jpg')
	},

	{
		name: 'Doctor Uri',
		subtitle: 'Please contact me, so I can help you',
		url: require('../Assets/Avatars/doctor_uri.jpg')
	},

]

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
    },

})