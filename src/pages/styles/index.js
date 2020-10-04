import React from 'react';
import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    // Todos os Styles da tela de LOGIN até !!---!!
        container:{
          backgroundColor: '#FFF',
          flex:1,
        },
        headerContainer: {
          marginTop:67,
          marginLeft:30,
          flexDirection: 'row',
        },
        gitHubLogo: {
          width:38,
          height:38,
        },
        textAdviceHub:{
          marginTop:9,
          marginLeft:5,
          fontWeight: 'bold',
        },
        bodyContainer:{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 170,
        },
        develeperCommit:{
          width: '100%',
          height: 200,
        },
        bodyText:{
          alignSelf: 'flex-start',
          marginLeft: '15%',
          marginTop: 64,
          fontSize: 10,
        },
        bodyInput:{
          height:45,
          width:260,
          borderColor: '#E3E3E3',
          backgroundColor: '#E3E3E3',
          borderWidth:1,
          padding:8,
        },
        bodyButton:{
          width: 260,
          height: 45,
          backgroundColor: '#BABABA',
          borderWidth:1,
          marginTop: 20,
          alignItems: 'center',
        },
        textButton:{
          marginTop:8,
          fontWeight: 'bold',
          fontSize: 12,
        },
        containerProfile:{

        },
        textButtonVoltar:{
          marginTop: 16,
          marginLeft: 30,
          fontWeight: 'bold',
        },
    // !!---!! FIM LOGIN
    // Todos os Styles da tela de PROFILE até !!---!!
        
    // !!---!! FIM PROFILE
});


export default styles;