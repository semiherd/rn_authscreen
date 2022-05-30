import React,{useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Tab1 from '../screen/Tab/Tab1';
import Tab2 from '../screen/Tab/Tab2';
import Tab3 from '../screen/Tab/Tab3';
import ProfileImage from '../main/ProfileImage';
import Signout from '../main/Signout';
import { useAuthState } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    const user = useAuthState();
    
    //const stackScreens=[];  You can add names of the screens to be visible=none on function tabBarVisible

    function tabBarVisible (item,array){
        let visible;
        if (array.includes(item)==true){
            visible=  'none';
        }else{
            visible= 'flex';
        } 
        return visible;
    }

    return ( 
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarStyle: {
                display: tabBarVisible(getFocusedRouteNameFromRoute(route),stackScreens),
             },
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                switch (route.name) {
                    case 'Community':
                    iconName = focused 
                        ? 'ios-checkbox' 
                        : 'ios-checkbox-outline';
                    break;
                    case 'Messages':
                    iconName = focused 
                    ? 'ios-add-circle' 
                    : 'ios-add-circle-outline';
                    break;
                    case 'Pro':
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                    break;
                }
                return (
                    <Ionicons name={iconName} type="ionicon" size={size} color={color} />
                );
            },
            headerRight: () => <Signout />,
            headerLeft: () => <ProfileImage data={userData} />,
            
        })}   
        >
        <Tab.Screen name="Tab1" component={Tab1} initialParams={{data: userData}} />
        <Tab.Screen name="Tab2" component={Tab2} />
        <Tab.Screen name="Tab3" component={Tab3} />
    </Tab.Navigator>  
    )
}

export default MainNavigator;