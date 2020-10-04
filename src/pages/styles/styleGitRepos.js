import React from 'react';
import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
  containerRepos:{
      backgroundColor: '#ECECEC',
      width:290,
      height:120,
      marginTop:10,
      alignSelf:'center',
      justifyContent:'flex-start',
  },
  containerText:{
      marginLeft:10,
  },
  nameRepos:{
      fontWeight: 'bold',
      fontSize: 20,
  },
  descRepos:{
      height:'50%',
      width:'auto',
      fontSize:10,
  },
  detailRepos:{
      flexDirection: 'row',
      overflow:'hidden',
  },
  langRepos:{
      position:'relative',
      marginRight: 4,
      fontSize: 12,
  }
});


export default styles;