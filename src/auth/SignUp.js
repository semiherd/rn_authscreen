import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { signIn, signUp, confirmSignUp } from '../context/AuthService';
import { useAuthDispatch } from '../context/AuthContext';
import styles  from './style/SignUpStyles';

const SignUpScreen = ({ navigation }) => {
  const dispatch = useAuthDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signed, setSigned] = useState(false);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [code, setCode] = useState('');

  const signUpUser = () => {
    setSignUpLoading(true);
    signUp(email, password)
      .then((data) => {
        setSigned(true);
        setSignUpLoading(false);
      })
      .catch((err) => {
        setSignUpLoading(false);
        console.log(err);
      });
  };

  const confirm = () => {
    setVerifyLoading(true);
    confirmSignUp(email, code)
      .then(() => {
        setVerifyLoading(false);
        signIn(email, password).then(() =>
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
        );
      })
      .catch((err) => {
        setVerifyLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      {!signed && (
       <View>
          <Text style={styles.title}>App Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => setEmail(value.toLowerCase())}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCompleteType="email"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(value) => setPassword(value.toLowerCase())}
            value={password}
            placeholder="Password"
            keyboardType="default"
            textContentType="password"
            autoCapitalize="none"
            autoCompleteType="password"
          />
          <View style={styles.link}>     
            <Button
              loading={signUpLoading}
              disabled={signUpLoading}
              type="outline"
              title="SIGN UP"
              onPress={signUpUser}
              color='red'
            />
          </View>
        </View>
      )}
      {signed && (
        <>
          <TextInput
            placeholder="Verification code"
            value={code}
            onChangeText={(value) => setCode(value)}
            keyboardType="default"
            autoCapitalize="none"
          />
          <Button
            loading={verifyLoading}
            disabled={verifyLoading}
            type="outline"
            title="Verify"
            onPress={confirm}
          />
        </>
      )}
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 18,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#CDD2D6' }}>Already a member?</Text>
        <TouchableOpacity
          style={{ marginLeft: 4 }}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text>Sign in!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;


