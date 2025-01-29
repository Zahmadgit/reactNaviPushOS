import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SecondPage = ()=>{

    const navigation = useNavigation(); 
    return(
        <View style={styles.container}>
            <Text style= {styles.title}>Second Page</Text>
            <Button 
                title='Navigate to Third Page'
                onPress={()=> navigation.navigate('ThirdPage',{message: "Coming from SecondPage using .navigate"})}
            >
            </Button>
            <Button 
                title='Navigate to Third Page with a push'
                onPress={()=> navigation.push('ThirdPage',{message: "Coming from SecondPage using .push"})}
            >
            </Button>

            <Button 
                title='Navigate to first Page with a push'
                onPress={()=> navigation.push('FirstPage',{message: "Coming from SecondPage using .push"})}
            >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red'
    }
})

export default SecondPage;