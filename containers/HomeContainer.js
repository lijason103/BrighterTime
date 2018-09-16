import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, TextInput, Image, ImageBackground, Button, Alert} from "react-native"
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
            text: 'a'
        }
    }

    testing() {
            // Alert.alert(this.state.text)
        console.warn(this.state.text)
    }

    render() {
        console.warn(this.state.text)
        return <View style={styles.container}>
            <ImageBackground source = {require('../Assets/background.jpg')}
                style = {styles.backgroundContainer}
            >
                <View style={styles.videoContainer}>
                    <Image
                        source={require('../videos/demo.gif')}
                        style={styles.imageContainer}
                    />
                </View>
                <ScrollView 
                    contentContainerStyle={styles.questionContainer}
                >
                    <View style = {styles.gameQuestionContainer}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Hi there! What are your thoughts on this situation?</Text>
                           
                           <View style = {{paddingTop: 20}}>
                            <TextInput
                                multiline={true}
                                style={styles.textContainer}
                                onChangeText={(text) => this.setState({text})}
                                maxLength = {200}
                            />
                            </View>

                            <View>
                                <Button
                                  onPress={this.testing}
                                  title="Submit"
                                  color="#841584"
                                  accessibilityLabel="Learn more about this purple button"
                                />

                            </View>

                    </View>
                </ScrollView>

                </ImageBackground>
                


        </View>
    }
}

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
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
        borderRadius: 20,
    },
    imageContainer: {
        borderRadius: 30, 
        width: (Dimensions.get('window').width + 100) / 2,
        justifyContent: 'center',
    },
    gameQuestionContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: '#ffca28',
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
    }
})

