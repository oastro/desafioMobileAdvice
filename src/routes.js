import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/login';
import Profile from './pages/profile';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator  
                screenOptions={{
                headerShown: false
            }}> 
                <Stack.Screen 
                    name="Login"
                    component={Login}
                />
                <Stack.Screen 
                    name="Profile"
                    component={Profile}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}