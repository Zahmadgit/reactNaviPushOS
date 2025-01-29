import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const ThirdPage = (prop)=>{
    const navigation = useNavigation();
    const route = useRoute();
    const { message } = route.params;

    const updateParams = ()=>{
        navigation.setParams({message: "Updated from ThirdPage"});
    }

    return(
        <View style={styles.container}>
            <Text style= {styles.title}>Third Page</Text>
            <Button 
                title='goBack'
                onPress={()=> navigation.goBack()}
            >
            </Button>
            <Button 
                title='popToTop'
                onPress={()=> navigation.popToTop()}
            >
            </Button>
            <Button 
                title='updateParams'
                onPress={updateParams}
            ></Button>
            <Text>{message}</Text>
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

export default ThirdPage;