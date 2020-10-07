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
          alignSelf: 'center',
          alignItems: 'flex-start',
          marginTop: 64,
          fontSize: 10,
          width:260,
        },
        bodyInput:{
          height:45,
          width:260,
          borderColor: '#E3E3E3',
          backgroundColor: '#E3E3E3',
          padding:8,
        },
        bodyButton:{
          width: 260,
          height: 45,
          backgroundColor: '#BABABA',
          marginTop: 20,
          alignItems: 'center',
          justifyContent:'center',
        },
        textButton:{
          fontWeight: 'bold',
          fontSize: 12,
        },      
    // !!---!! FIM LOGIN
    // Todos os Styles da tela de PROFILE até !!---!!
        containerProfile:{
              
        },
        textButtonVoltar:{
          marginTop: 16,
          marginLeft: 30,
          fontWeight: 'bold',
        },
        userProfile:{
          alignItems: 'center',
          flexDirection: 'column',
        },
        avatarProfile:{
          width: 195,
          height: 195,
          borderRadius: 100,
        },
        nameProfile:{
          fontWeight: 'bold',
          fontSize: 20,
          marginTop:20,
        },
        descProfile:{
          textAlign: 'center',
          padding: 20,
          overflow:'hidden',
        },
        gitProfile:{
          flexDirection: 'row',
          justifyContent:'center',
        },
        gitTextProfile:{
          alignItems: 'flex-start',
          padding:10,
        },
        gitNumberProfile:{
          fontWeight:'bold',
        },
    // !!---!! FIM PROFILE
});


export default styles;