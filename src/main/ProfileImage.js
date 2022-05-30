import React from 'react';
import {View,Pressable} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { useAuthState } from '../context/AuthContext';

function ProfileImage ({props}){
    const navigation= useNavigation();
    const user = useAuthState();
    
    const navToProfile= () =>{
        navigation.navigate('Profile', {
            id: user.userData
        });        
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.profileImage} onPress={navToProfile}>
                <Ionicons name="person" size={24} color="teal" />
            </Pressable> 
        </View>
    )
}

export default ProfileImage;