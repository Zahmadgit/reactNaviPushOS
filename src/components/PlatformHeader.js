import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import AndroidHeader from '../androidComponents/AndroidHeader';
import IOSHeader from '../iosComponents/IOSHeader';

const PlatformHeader =()=>{

    if(Platform.OS === 'ios'){
        return(
            <IOSHeader/>
        )
    } else if (Platform.OS === 'android'){
        return(
            <AndroidHeader/>
        )
    } else {
        return null;
    }
}
export default PlatformHeader;
