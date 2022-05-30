
import React from 'react';
import {View,Pressable} from 'react-native';
import styles from './style/SignoutStyle';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { signOut } from '../context/AuthService';
import {useAuthDispatch } from '../context/AuthContext';

function Signout (){
    const dispatch = useAuthDispatch();

    const handleSignOut = async () => {
        try {
          await signOut();
          dispatch({ type: 'SIGN_OUT' });
        } catch (e) {
          console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleSignOut}>
                <FontAwesome name="sign-out" size={24} color="teal" />
            </Pressable>
         </View>
    )
}

export default Signout;