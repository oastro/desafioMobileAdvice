import * as React from 'react';
import {Text,View, StyleSheet} from 'react-native';

import styles from './styles/styleGitRepos';

export default function GitRepos(){
    return(
        <View style={styles.containerRepos}>
            <View style={styles.containerText}>
                <Text style={styles.nameRepos}>react-native</Text>
                <Text style={styles.descRepos}>A framework for building native apps with React.</Text>
                <View style={styles.detailRepos}>
                    <Text style={styles.langRepos}>Javascript</Text>
                    <Text style={styles.langRepos}>|</Text>
                    <Text style={styles.langRepos}>00000</Text>
                    <Text style={styles.langRepos}>Stars</Text>
                    <Text style={styles.langRepos}>|</Text>
                    <Text style={styles.langRepos}>99999</Text>
                    <Text style={styles.langRepos}>Forks</Text>
                </View>
            </View>
        </View>
    );
}

