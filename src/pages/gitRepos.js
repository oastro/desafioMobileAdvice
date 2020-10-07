import React, {useEffect, useState} from 'react';
import {Text,View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles/styleGitRepos';
import apiGitProfile from '../components/api';

export default function GitRepos(){
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(()=>{
        searchRepos()
    },[])
    
    async function searchRepos(){
        await apiGitProfile.get(`/${searchValue}/repos`)
        .then((response) => {
           setData(response.data);
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    return(
        <View>
        <FlatList data={data}
            renderItem = {(data) => {
                return(
                    <View style={styles.containerRepos}>
                    <View style={styles.containerText}>
                        <Text style={styles.nameRepos}>{data.item.name}</Text>
                        <Text style={styles.descRepos}>{data.item.description}</Text>
                        <View style={styles.detailRepos}>
                            <Text style={styles.langRepos}>{data.item.language}</Text>
                            <Text style={styles.langRepos}>|</Text>
                            <Text style={styles.langRepos}>{data.item.stargazers_count}</Text>
                            <Text style={styles.langRepos}>Stars</Text>
                            <Text style={styles.langRepos}>|</Text>
                            <Text style={styles.langRepos}>{data.item.forks}</Text>
                            <Text style={styles.langRepos}>Forks</Text>
                        </View>
                    </View>
                </View>
                )
            }}
        />
        </View>
    );
}



