import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from '../screens/FirstPage';
import SecondPage from '../screens/SecondPage';
import ThirdPage from '../screens/ThirdPage';



const Stack = createStackNavigator();

const Navigator=()=>{
    return(
        <Stack.Navigator>
            
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="SecondPage" component={SecondPage} />
            <Stack.Screen name="ThirdPage" component={ThirdPage} />

        </Stack.Navigator>
    )
}

export default Navigator;