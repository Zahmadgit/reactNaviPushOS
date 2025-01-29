import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,StyleSheet,Text,View,
} from 'react-native';
import FirstPage from './src/screens/FirstPage';
import ErrorBoundary from './src/components/ErrorBoundary';
import PlatformHeader from './src/components/PlatformHeader';


function App(): React.JSX.Element {


  return (
    <ErrorBoundary>
      <PlatformHeader/>
      <SafeAreaView>
          <FirstPage/>
      </SafeAreaView>    
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({

});

export default App;
