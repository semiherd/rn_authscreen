import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../auth/SignIn';
import SignUpScreen from '../auth/SignUp';

const Stack = createNativeStackNavigator();

const AuthNavigator = ({ isSignout }) => (
  <Stack.Navigator 
    initialRouteName="SignIn" 
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{
        headerShown: false,
        title: 'Sign in',
        animationTypeForReplace: isSignout ? 'pop' : 'push'
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      
    />
  </Stack.Navigator>
);

export default AuthNavigator;

    