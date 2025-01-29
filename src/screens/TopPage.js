import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const TopPage = ()=>{
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style= {styles.title}>Top Page</Text>
            <Button 
                title='to Second Page'
                onPress={()=> navigation.navigate('SecondPage')}
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

export default TopPage;