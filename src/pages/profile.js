import * as React from 'react';
import {Text,View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import GitRepos from './gitRepos';



export default function Profile({navigation}){
    return(
        <SafeAreaView style={styles.containerProfile}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textButtonVoltar}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.userProfile}> 
                <Image style={styles.avatarProfile} source={{uri:'https://avatars3.githubusercontent.com/u/69631?v=4'}}/> 
                <Text style={styles.nameProfile}>Facebook</Text>
                <Text style={styles.descProfile}>We are working to build community through open source technology. NB: members must have two-factor auth.</Text>
            </View>
            <View style={styles.gitProfile}>
                <View style={styles.gitTextProfile}>
                    <Text style={styles.gitNumberProfile}>124</Text>
                    <Text>Repositorios</Text>
                </View>
                <View style={styles.gitTextProfile}>
                    <Text style={styles.gitNumberProfile}>168</Text>
                    <Text>Seguidores</Text>
                </View>
                <View style={styles.gitTextProfile}>
                    <Text style={styles.gitNumberProfile}>123</Text>
                    <Text>Seguindo</Text>         
                </View>
            </View>

            <GitRepos />
        </SafeAreaView>
    );
}