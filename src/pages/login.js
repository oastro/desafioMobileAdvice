import * as React from 'react';
import { Text, StyleSheet, TextInput, View, KeyboardAvoidingView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import GitHubLogo from '../assets/images/gitHubLogo.svg';
import DeveloperCommit from '../assets/images/developerCommit.svg';

const styles = StyleSheet.create({
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
    },
    bodyContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 240,
    },
    develeporCommit:{
      width: '90%',
      height: 180,
    },
    bodyText:{
      alignSelf: 'flex-start',
      marginLeft: 77,
      marginTop: 64,
      fontSize: 12,
    },
    bodyInput:{
      height:40,
      width:260,
      borderColor: '#E3E3E3',
      backgroundColor: '#E3E3E3',
      borderWidth:1,
      padding:8,
    },
    bodyButton:{
      width: 260,
      height:40,
      backgroundColor: '#BABABA',
      borderWidth:1,
      marginTop: 20,
      alignItems: 'center',
    },
    textButton:{
      marginTop:8,
      fontWeight: 'bold',
      fontSize: 12,
    }
  });
  
export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='position'>
        
        <View style={styles.headerContainer}>
            <GitHubLogo style={styles.gitHubLogo}/>
            <Text style={styles.textAdviceHub}>AdviceHub</Text>
        </View>
    
    <View style={styles.bodyContainer}>
        <DeveloperCommit style = {styles.develeporCommit}/>
        <Text style = {styles.bodyText}>Insira um usuário do GitHub</Text>
        <TextInput style={styles.bodyInput}/>
        <TouchableOpacity style={styles.bodyButton}>
            <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
  );
}