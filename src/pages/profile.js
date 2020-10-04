import * as React from 'react';
import {Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';


export default function Profile({navigation}){
    return(
        <SafeAreaView style={styles.containerProfile}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.textButtonVoltar}>Voltar</Text>
            </TouchableOpacity>
            <View>
            </View>
        </SafeAreaView>
    );
}