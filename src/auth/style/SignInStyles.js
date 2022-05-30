
import {StyleSheet,Dimensions} from 'react-native';

const WindowWidth= Dimensions.get('window').width;
const WindowHeight= Dimensions.get('window').height;

const styles= StyleSheet.create({
    container: {
        flex:1,
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        
    },
    textInput:{
        height: 40,
        borderBottomColor:'black',
        borderBottomWidth:1,
        width: WindowWidth * 0.7,
        borderRadius: 10,
        textAlign:'center',
        marginVertical:'1%',
    },
    text:{
        textAlign: 'center',
        color: 'white',
    },
    link:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical:'5%',
    },
    linkSignUp:{
        marginVertical:WindowHeight * 0.04
    },
    button:{
        borderRadius: 10,
        backgroundColor:'red',
        fontWeight:'600',
        padding:2,
        color:'white'
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginVertical:'3%',
    },
    welcomeImage:{
        marginVertical:'1%',
        width: WindowWidth * 0.95,
        height: WindowHeight * 0.4,
        borderColor:'transparent',
        borderWidth:1,
        borderRadius: 10,
    },
    socialSignIn:{
        marginVertical:'1%',
        width: 40,
        height:40,
        borderColor:'transparent',
        borderWidth:1,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    socialIcon:{
        flexDirection: 'row',
    },
    error:{
        color: 'red',
        paddingBottom: 5,
        marginLeft: 5,
    }
});
export default styles;