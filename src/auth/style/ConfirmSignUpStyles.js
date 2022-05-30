
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
        borderBottomColor:'teal',
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
        flexDirection: 'row',
        justifyContent:'space-between',
        marginVertical:'1%',
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
        color:'#483d8b',
    },
    error:{
        color: 'red',
        paddingBottom: 5,
        marginLeft: 5,
    }
});
export default styles;
