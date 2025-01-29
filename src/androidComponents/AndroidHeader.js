import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AndroidHeader =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Android Header
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        //android specific elements
        elevation: 10
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
});


export default AndroidHeader;
