import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,StyleSheet,Text,View,
} from 'react-native';
import FirstPage from './src/screens/FirstPage';

function App(): React.JSX.Element {


  return (
    <SafeAreaView>

        <FirstPage/>
   
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({

});

export default App;
