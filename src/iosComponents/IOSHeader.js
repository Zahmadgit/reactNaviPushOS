import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const IOSHeader =()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                IOS Header
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        height: 200,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    }
});


export default IOSHeader;
