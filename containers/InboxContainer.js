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
        subtitle: 'Hey, I am in the area and available for free chat',        
        url: require('../Assets/Avatars/doctor_peter.png')    
    },    
    {       
        name: 'Doctor Phil',        
        subtitle: 'Hi there, I feel that maybe you need some help and you can always get in touch with me, I have been studying depression for 20 years',        
        url: require('../Assets/Avatars/doctor_phil.jpg')   
    },     
    {        
        name: 'Doctor Uri',        
        subtitle: 'Hi there, here are some resources that can help: ',       
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