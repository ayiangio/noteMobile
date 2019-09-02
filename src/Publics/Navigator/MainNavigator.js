import React, { Component } from 'react';
import { createAppContainer, createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import Drawer from '../../Components/drawer'
import Home from '../../Screen/home/main'
import Add from '../../Screen/home/addNote'
const AppNavigator = createStackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },add: {
        screen: Add,
        navigationOptions: {
            header: null
        }
    },
}, {
        initialRouteName: 'home',
    })
const DrawerNote = createDrawerNavigator({
    main: { screen: AppNavigator }
}, {
        contentComponent: Drawer
    },
    {
        hideStatusBar: true,
        overlayColor: 'white',
        contentOptions: {
            activeTintColor: 'transparant',
            activeBackgroundColor: 'transparant',
        },
    })

export default createAppContainer(DrawerNote)
