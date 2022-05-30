
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
        width: WindowWidth * 0.6,
        borderRadius: 10,
        textAlign:'center',
        marginVertical:'2%',
    },
    text:{
        textAlign: 'center',
        color: 'white',
    },
    link:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical:'2%',
    },
    linkSignIn:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    button:{
        borderRadius: 10,
        backgroundColor:'teal',
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        marginVertical:'8%',
    },
    welcomeImage:{
        marginVertical:'2%',
        width: WindowWidth * 0.5,
        height: WindowHeight * 0.5,
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