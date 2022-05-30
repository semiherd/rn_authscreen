
import {StyleSheet,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles= StyleSheet.create({
   container: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginHorizontal:'2%',
   },
   searchbar:{
      flex:10,
      flexDirection: 'row',
      justifyContent:'flex-start',
      marginHorizontal:'2%',
      marginVertical: '1%',
      height: 40,
      borderWidth: 2,
      borderColor:'steelblue',
      borderRadius: 15,
  },
  searchText:{
      justifyContent:'flex-start',
      paddingHorizontal: '2s%',
      paddingVertical: '2%',  
      fontWeight: '600',
  },
  filterIcon:{
     flex:1,
     justifyContent:'center',
  }
});
export default styles;


  