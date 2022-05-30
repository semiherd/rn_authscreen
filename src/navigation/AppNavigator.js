import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthState, useAuthDispatch } from '../context/AuthContext';
import { checkAuth } from '../context/AuthService';

import SplashScreen from './SplashScreen';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { isLoading, isSignout, userToken } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    const checkAuthAsync = async () => {
      let token = null;
      let data = null;
      try {
        const user = await checkAuth();
        const { jwtToken } = user;
        const { sub } = user.attributes;
        token = jwtToken;
        data = sub;
      } catch (e) {
        console.log('error', e);
      }
      dispatch({ 
        type: 'RESTORE_TOKEN', 
        token, 
        userData: data 
      });
    };

    checkAuthAsync();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ headerShown: false }}
        >
          {isLoading && (
            
            <Stack.Screen name="Splash" component={SplashScreen} />
          )}
          {!isLoading && userToken == null ? (
            
            <Stack.Screen
              isSignout={isSignout}
              name="Auth"
              component={AuthNavigator}
            />
          ) : (
            
            <Stack.Screen name="Main" component={MainNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}