import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SupportContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Assistance',
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    _renderCategories(name, description, key) {
        let category = name !== 'General' ? name : ''
        return <TouchableOpacity 
            key={key}
            style={styles.card}
            onPress={() => {
                this.props.navigation.navigate('SearchScreen', {
                    key: 'SupportToSearch',
                    category
                })
            }}
        >
            <Text>{name}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
    }

    render() {
        return <View style={styles.container}>
            <View style={styles.card}>
                <Text>Who are you looking for?</Text>
            </View>
            {categories.map((category, key) => {
                return this._renderCategories(category.name, category.description, key)
            })}
        </View>
    }
}

const categories = [
    {
        name: 'Psychiatrist',
        description: 'Provides medication very rare they provide counseling',
        url: require('../Assets/psychiatrist.jpg'),
    },{
        name: 'Pyschologist',
        description: 'Can often provide counseling',
    },{
        name: 'Psychoterapist and Counselor',
        description: 'RCC and RPC',
    },{
        name: 'General',
        description: 'Everything',
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009faf',
        padding: 10,
    },
    card: {
        backgroundColor: '#4dd0e1',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    }

})

