import React, { Component } from 'react';
import { View } from "react-native"
import { HeaderBackButton } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeContainer extends Component {
 static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home page',
        }
    }
   

    render() {
        return <View style={{flex: 1, backgroundColor: 'red'}}>
  
        </View>
    }
}

