import React, { useState } from 'react';
import { View,Image, TextInput,Text, Button } from 'react-native';
import { Formik } from 'formik';
import { signIn } from '../context/AuthService';
import { useAuthDispatch } from '../context/AuthContext';
import styles  from './style/SignInStyles';

const SignInScreen = ({ navigation }) => {
  const dispatch = useAuthDispatch();
  const [signInLoading, setSignInLoading] = useState(false);

  const signInUser = async (values) => {
    const { email, password } = values;
    setSignInLoading(true);
    signIn(email, password)
      .then((r) => {
        dispatch({ 
            type: 'SIGN_IN', 
            token:  r.signInUserSession.accessToken.jwtToken,
            userData: r.attributes.sub
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setSignInLoading(false));
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => signInUser(values)}
        style={styles.container}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Text style={styles.title}>APP NAME</Text>
            <Image
              style={styles.welcomeImage}
              source={require('../asset/image/homepage.jpg')}
            />
            <TextInput
             style={styles.textInput}
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCompleteType="email"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
              keyboardType="default"
              textContentType="password"
              autoCapitalize="none"
              autoCompleteType="password"
            />
            <View style={[styles.link,styles.button]}>     
              <Button
                loading={signInLoading}
                disabled={signInLoading}
                type="outline"
                title="SIGN IN"
                onPress={handleSubmit}
                color="white"
               />
            </View>
            
          </>
        )}
     </Formik>   
     
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 18,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >

      </View>
        <View style={styles.linkSignUp}>   
          <View  style={styles.socialIcon}>
            <Image
                style={styles.socialSignIn}
                source={require('../asset/image/btn_google_dark_normal_ios.png')}
            />  
            <Image
                style={styles.socialSignIn}
                source={require('../asset/image/applelogo2x.png')}
            />  
          </View>
          <View>
            <Button
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}
                title='Sign Up'
                color="#841584"
                accessiblityLabel="back to signUp"
            />   
          </View>
      </View>  
  </View>
  );
};

export default SignInScreen;
  