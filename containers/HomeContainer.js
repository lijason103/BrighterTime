import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, TextInput, Image, ImageBackground, TouchableOpacity, Alert} from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Play Time',
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            text: '',
            index: 0,
        }
    }

    testing() {
        getResponse(`uid=1&message=${this.state.text}`).then(result => {
            alert(`Thanks for sharing! Score: ${result.score}`)
        })
        this.setState({
            text: '',
            index: this.state.index < questions.length-1 ? this.state.index + 1 : this.state.index
        })
    }

    render() {
        return <View style={styles.container}>

                {questions[this.state.index].type === 'gif' ? 
                    <View style={styles.videoContainer}>
                        <Image
                            source={questions[this.state.index].source}
                            style={styles.imageContainer}
                        />
                    </View> : <Image source={questions[this.state.index].source} style ={styles.imageContainer2}/>}

                <ScrollView 
                    contentContainerStyle={styles.questionContainer}
                >
                    <View style = {styles.gameQuestionContainer}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hi there! Any comments about this?</Text>
                           
                           <View style = {{paddingTop: 20}}>
                            <TextInput
                                multiline={true}
                                style={styles.textContainer}
                                onChangeText={(text) => this.setState({text})}
                                maxLength = {200}
                                value={this.state.text}
                            />
                            </View>

                            <View style = {{paddingTop: 10}}>
                                <TouchableOpacity 
                                    onPress={() => this.testing()}
                                    disabled={this.state.text === ''}
                                >
                                    <View style = {styles.buttonContainer}>
                                        <Text style = {{paddingTop: 10, fontWeight: 'bold'}}>SUBMIT</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                    </View>
                </ScrollView>

        </View>
    }
}

const questions = [

    {
        gif: 'What do you think?',
        source: require('../videos/demo.gif'),
    },
    {
        parking: 'Parking spot',
        source: require('../videos/output.gif'),
    },
    {
        greeting: 'How are you today?',
        source: require('../Assets/greetings.jpg'),
    }

]

async function getResponse (param) {
    return await fetch(`http://104.248.71.161?${param}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        return JSON.parse(response["_bodyText"])
    })
    .catch((error) => {
        return {score: 0}
    });
}

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#deeaee',
        backgroundColor: '#EEEEEE',
    },
    videoContainer: {
        backgroundColor: 'transparent',
        borderColor: '#03A9F4',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        width: Dimensions.get('window').width,
        height: 100,
        alignItems: 'center',
        paddingTop: 20,
    },
    imageContainer: {
        borderRadius: 10, 
        width: (Dimensions.get('window').width + 100) / 2,
        justifyContent: 'center',
    },
        imageContainer2: {
        borderRadius: 30, 
        width: (Dimensions.get('window').width),
        height: (Dimensions.get('window').height) / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameQuestionContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: '#03A9F4',
        height: 100, 
        width: winWidth - 30, 
        borderWidth: 10, 
        borderColor: 'transparent',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    backgroundContainer: {
        width: winWidth,
        height: winHeight,
    },
    buttonContainer: {
        backgroundColor: 'orange',
        height: 40,
        width: 250,
        marginBottom: 30,
        alignItems: 'center',
        borderRadius: 15,
    }
})

