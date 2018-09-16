import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

export default class WallContainer extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        onPress: PropTypes.func,
    }

    constructor(props) {
        super(props)
    }

    _renderNormal() {
        return <View style={[{
            width: this.props.size,
            height: this.props.size,
            backgroundColor: this.props.color,
            shadowOffset:{  
                width: 1,  
                height: 1,  
            },
            shadowColor: 'black',
            shadowOpacity: 0.8,
            alignItems: 'center',
        }, this.props.style]}>
            <Image
                source={require('../Assets/pin.png')}
                style={{width: 20, height: 20, marginBottom: 10}}
            />
            <Text>{this.props.message}</Text>
        </View>
    }

    _renderSpecial() {
        return <TouchableOpacity style={[{
            width: this.props.size,
            height: this.props.size,
            backgroundColor: this.props.color,
            shadowOffset:{  
                width: 1,  
                height: 1,  
            },
            shadowColor: 'black',
            shadowOpacity: 0.8,
            alignItems: 'center',
        }, this.props.style]}
            onPress={() => this.props.onPress()}
        >
            <Image
                source={require('../Assets/pin.png')}
                style={{width: 20, height: 20, marginBottom: 30}}
            />
            <Text>{this.props.message}</Text>
        </TouchableOpacity>
    }

    render() {
        return this.props.onPress ? this._renderSpecial() : this._renderNormal()
    }
}

const styles = StyleSheet.create({
})

