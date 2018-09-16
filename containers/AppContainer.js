import React, { Component } from 'react'
import { StackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeContainer from '../containers/HomeContainer'
import InboxContainer from '../containers/InboxContainer'
import WallContainer from '../containers/WallContainer'
import SupportContainer from '../containers/SupportContainer'
import SearchContainer from '../containers/SearchContainer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class AppContainer extends Component {

	constructor(props) {
		super(props)
	}

    render() {
		return <TabNavigator />
    }
}

const HomeStack = StackNavigator({
    HomeScreen1: { 
        screen: HomeContainer,
    },
});

const InboxStack = StackNavigator({
    InboxScreen: { 
        screen: InboxContainer,
    }
});

const WallStack = StackNavigator({
    WallScreen: {
        screen: WallContainer
    }
})

const SupportStack = StackNavigator({
    SupportScreen: {
        screen: SupportContainer
    },
    SearchScreen: {
        screen: SearchContainer
    }
})

const TabNavigator = createBottomTabNavigator(
    {
        Wall: WallStack,
        Home: HomeStack,
        Inbox: InboxStack,
        Help: SupportStack,
    },{
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            return <Icon name={routeName.toLowerCase()} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        },
    }
)

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