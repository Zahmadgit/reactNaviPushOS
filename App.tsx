import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,StyleSheet,Text,View,
} from 'react-native';

function App(): React.JSX.Element {


  return (
    <SafeAreaView>
      <View>
        <Text>hello world</Text>
      </View>
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({

});

export default App;
