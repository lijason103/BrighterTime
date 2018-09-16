import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, Dimensions, ImageBackground, TextInput, ScrollView, TouchableOpacity} from "react-native"
import StickyNote from '../components/StickyNote'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class WallContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Wall',
        }
    }

    constructor(props) {
        super(props)
        this.state={
            isEditing: false,
            text: '',
        }
    }

    render() {
        return <View style={styles.container}>
            <ImageBackground
                source={require('../Assets/wall.jpg')}
                style={{
                    width: winWidth,
                    height: winHeight,
                }}
            >
                {stickyNotes.map((stickyNote, key) => {
                    return <StickyNote
                    key={key}
                    message={stickyNote.message}
                    size={stickyNoteSize}
                    color={`${getRandomColor(0, 255, 0, 255, 0, 255)}`}
                    style={{
                        position: 'absolute',
                        top: getRandomNumber(-stickyNoteSize, winHeight/2 - stickyNoteSize),
                        left: getRandomNumber(-stickyNoteSize, winWidth),
                    }}
                    />
                })}
                <StickyNote 
                    message="Would you like to share your thoughts anonymously as well?"
                    size={stickyNoteSize*2}
                    color={'#FFEB3B'}
                    style={{
                        position: 'absolute',
                        top: winHeight/2,
                        left: winWidth/2 - stickyNoteSize, 
                    }}
                    onPress={() => {
                        this.setState({
                            isEditing: true
                        })
                    }}
                />
                <Modal
                    isVisible={this.state.isEditing}
                    style={{flex: 1, 
                        justifyContent: 'flex-start'
                    }}
                >
                    <View style={{
                        flex: 1, 
                        backgroundColor: '#FFEB3B',
                        paddingTop: 10,
                        paddingHorizontal: 10,
                        paddingBottom: 10,
                    }}>
                        <Icon
                            name="close"
                            size={20}
                            color={'red'}
                            onPress={() => this.setState({isEditing: false})}
                        />
                        <ScrollView
                            contentContainerStyle={{flex: 10}}
                        >
                            <TextInput
                                style={{
                                    flex: 1,
                                }}
                                multiline={true}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </ScrollView>
                        <TouchableOpacity style={{
                            flex: 0.1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 5,
                        }}
                            onPress={() => {
                                this.setState({
                                    text: '',
                                    isEditing: false,
                                }, () => {
                                    setTimeout(() => {
                                        Alert.alert(
                                            'Congratulations',
                                            'Thank you for sharing with us!',
                                            [
                                              
                                                {text: 'OK', onPress: () => {}},
                                            ],
                                            { cancelable: false }
                                        )
                                    }, 500)
                                })
                            }}
                        >
                            <Text>Share Anonymously!</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    }
}

const stickyNoteSize = 150

const stickyNotes = [
    { message: "Thank you for all your services!"},
    { message: "IT ME SLEEPING AWAY MY ANXIETY- I MEAN SLEEPING FROM A HARD DAY OF WORK..."},
    { message: "makes you wonder about the mental health of the person who robbed that store today"},
    { message: "Today was a great day at work, I helped to save a family study in an aparment burning down"},
    { message: "TIME TO RESPECT AND ACKNOWLEDGE PEOPLE WITH MENTAL HEALTH PROBLEMS "},
    { message: "I would like to know why people keep their cookies in a jar"},
    { message: "My dog was acting so funny today, he tried to chew the carpet"},
    { message: "There was a big line-up at the hospital emergency today. A few people couldn't get treated. We need better healthcare"},
    { message: "I want to porpose to my girlfriend, hope it all goes well"},
    { message: "My father just passed away, I am thinking about him all day. I feel guilty to be happy"},
    { message: "I feel great about my work and want to continue helping people"},
    { message: "Looking for a baby-sitter for my dog"},
    { message: "I feel like experimenting with mushrooms"},
    { message: "I have a hard time motivating myself to go to work these days"},
    { message: "Don't forget to take care of your mental health folks!"},
]

const getRandomColor = (rMin, rMax, gMin, gMax, bMin, bMax) => {
    return 'rgb(' + 
        getRandomNumber(10, 245) + ','
        + getRandomNumber(10, 245) + ','
        + getRandomNumber(10, 245) +
        ')'
}

const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const winHeight = Dimensions.get('window').height
const winWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})

