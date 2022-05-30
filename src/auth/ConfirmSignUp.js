import React,{useState} from 'react';
import {View,Text, Image, TextInput, Button, Pressable, Alert} from 'react-native';
import styles from './style/ConfirmSignUpStyles';
import {Auth} from 'aws-amplify'
import {validateEmail} from './validation';

function ConfirmSignUp (props){
    const[state,setState]=useState({
        email:'',
        confirmationCode:'',
    });
    const[error,setError]=useState({email:''});
    
    async function onSb(){
        const {email: username, confirmationCode: code}= state;
        const emailError=validateEmail(state.email);
        if(emailError) setErrors({email:emailError});
        else{
            try{
                const user= await Auth.confirmSignUp(username,code);
                await Alert.alert('New Account has been created' );
                props.onStateChange('signIn');
            } catch(error){
                Alert.alert(error.message);
            }
        }
    }
    async function resendConfirmationCode() {
        const {email: username}= state;
        try {
            await Auth.resendSignUp(username);
            Alert.alert('New Confirmation code sent to ' + username);
        } catch (err) {
            Alert.alert('Sending new confirmation code to ' + username + ' failed');
            console.log('error resending code: ', err);
        }
    }

    if(props.authState === 'confirmSignUp')
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Confirmation Code</Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText= {(value) => setState({...state,email:value.toLowerCase()})}
                    value={state.email}
                    placeholder="Email"
                />
                <Text style={styles.error}>{error.email}</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText= {(value) => setState({...state,confirmationCode:value})}
                    value={state.confirmationCode}
                    placeholder="Confirmation Code"
                />
                      
                <View style={styles.link}>      
                    <Button
                        style={styles.button}
                        onPress={() => resendConfirmationCode()}
                        title='Resend Code'
                        color="#841584"
                        //accessiblityLabel="back to signIn"
                    />
                    <Button
                        style={styles.button}
                        onPress={() => onSb()}
                        title='Confirm'
                        color="#841584"
                        accessiblityLabel="back to signIn"
                    />
                </View>        
                      
                <View style={styles.linkSignIn}>     
                    <Button
                        style={styles.button}
                        onPress={() =>props.onStateChange('signIn', {})}
                        title='Sign In'
                        color="#841584"
                        //accessiblityLabel="back to signIn"
                    />       
                </View>
            </View>        
        )
    else return null;
}

export default ConfirmSignUp;