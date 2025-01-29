import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,StyleSheet,Text,View,
} from 'react-native';
import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';
import ThirdPage from './src/screens/ThirdPage';
import ErrorBoundary from './src/components/ErrorBoundary';
import PlatformHeader from './src/components/PlatformHeader';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createStaticNavigation } from '@react-navigation/native';

function App(): React.JSX.Element {
 
const RootStack = createNativeStackNavigator({
  screens:{
    FirstPage: FirstPage,
    SecondPage: SecondPage,
    ThirdPage: ThirdPage,
  }
});
  const Navigation = createStaticNavigation(RootStack);
  return (
    
   
      <ErrorBoundary>
      <PlatformHeader/>
      <Navigation/>
      </ErrorBoundary>
  );
}


export default App;
