import React, { Component } from 'react';
import { View, StyleSheet, Dimensions} from "react-native"
import StickyNote from '../components/StickyNote'

export default class WallContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Wall',
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return <View style={styles.container}>
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
                }}
            />
        </View>
    }
}

const stickyNoteSize = 150

const stickyNotes = [
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
    { message: "Good notes"},
]

const getRandomScreenPosition = (width, height) => {
    return {
        x: getRandomNumber(0, width),
        y: getRandomNumber(0, height),
    }
}

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

