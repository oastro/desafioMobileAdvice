import React, {useEffect, useState} from 'react';
import {Text,View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import GitRepos from './gitRepos';
import apiGitProfile from '../components/api';


export default function Profile({route,navigation}){
    const searchValue = route.params;
    const [data, setData] = useState([]);

    useEffect(()=>{
        searchProfile()
    },[])

    async function searchProfile(){
        await apiGitProfile.get(`${searchValue}`)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    return(
        <SafeAreaView style={styles.containerProfile}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textButtonVoltar}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.userProfile}> 
                <Image style={styles.avatarProfile} source={{uri:`${data.avatar_url}`}}/> 
                <Text style={styles.nameProfile}>{data.name}</Text>
                <Text style={styles.descProfile}>{data.bio}</Text>
            </View>
            <View style={styles.gitProfile}>
                <View style={styles.gitTextProfile}>
                    <Text style={styles.gitNumberProfile}>{data.public_repos}</Text>
                    <Text>Repositorios</Text>
                </View>
                <View style={styles.gitTextProfile}>
                    <Text style={styles.gitNumberProfile}>{data.followers}</Text>
                    <Text>Seguidores</Text>
                </View>
                <View style={styles.gitTextProfile}>
                    <Text style={styles.gitNumberProfile}>{data.following}</Text>
                    <Text>Seguindo</Text>         
                </View>
            </View>

            <GitRepos />
        </SafeAreaView>
    );
}