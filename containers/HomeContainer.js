import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, TextInput, Image } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home page',
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Image
                    source={require('../videos/demo.gif')}
                    style={{width: 300, height: 300}}
                />
            </View>
            <ScrollView 
                contentContainerStyle={styles.questionContainer}
            >
                <Text style={{fontSize: 15}}>Hi there! What are your thoughts on this situation?</Text>
                <View>
                    <TextInput
                        style={{height: 100, width: winWidth - 20, borderWidth: 1, borderColor: 'transparent'}}
                        onChangeText={(text) => this.setState({text})}
                        maxLength = {200}
                    />          
                </View>
            </ScrollView>
        </View>
    }
}

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    videoContainer: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionContainer: {
        backgroundColor: '#03A9F4',
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        alignItems: 'center',
        paddingTop: 20,
    },
})

