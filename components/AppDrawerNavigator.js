import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'; 
import {AppTabNavigator} from './AppTabNavigator'; 
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MySupportScreen from '../screens/MySupportScreen';
import NotificationScreen from '../screens/NotificationScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MySupport:{
        screen:MySupportScreen
    },
    Notifications:{
        screen:NotificationScreen
    },
    Setting:{
        screen:SettingScreen
    },
},
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:"Home"
    }
);