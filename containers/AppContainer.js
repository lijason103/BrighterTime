import React, { Component } from 'react'
import { View } from "react-native"
import { StackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeContainer from '../containers/HomeContainer'
import InboxContainer from '../containers/InboxContainer'


class AppContainer extends Component {

	constructor(props) {
		super(props)
	}

    render() {
		return <TabNavigator />
    }
}

const HomeStack = StackNavigator({
    HomeScreen: { 
        screen: HomeContainer,
    }
});

const InboxStack = StackNavigator({
    InboxScreen: { 
        screen: InboxContainer,
    }
});

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Inbox: InboxStack,
})

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';

function mapStateToProps(state, props) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);