import * as React from 'react';
import {Text,View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    containerRepos:{
        backgroundColor: '#EFEFEF',
        width:290,
        height:100,

        marginTop:10,
        alignSelf: 'center',
        alignItems: 'flex-start',

    },
    containerText:{
        marginLeft:10,
    },
    nameRepos:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    descRepos:{
        fontSize:10,
    },
    detailRepos:{
        flexDirection: 'row',
        justifyContent:'center',
    },
    langRepos:{
        alignItems: 'flex-start',
        marginTop:30,
        paddingRight:10,
        fontSize: 10,
    }
});

export default function GitRepos(){
    return(
        <View style={styles.containerRepos}>
            <View style={styles.containerText}>
                <Text style={styles.nameRepos}>react-native</Text>
                <Text style={styles.descRepos}>A framework for building native apps with React.</Text>
                <View style={styles.detailRepos}>
                    <Text style={styles.langRepos}>Javascript</Text>
                    <Text style={styles.langRepos}> | 99999</Text>
                    <Text style={styles.langRepos}>Stars</Text>
                    <Text style={styles.langRepos}> | 10100</Text>
                    <Text style={styles.langRepos}>Forks</Text>
                </View>
            </View>
        </View>
    );
}

