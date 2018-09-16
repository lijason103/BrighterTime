import React, { Component } from 'react'
import { View } from "react-native"
import { StackNavigator } from 'react-navigation'
import HomeContainer from '../containers/HomeContainer'


class AppContainer extends Component {

	constructor(props) {
		super(props)
	}

    render() {
		return <Navigator />
    }
}

const Navigator = StackNavigator({
    HomeScreen: { 
        screen: HomeContainer,
    }
});

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