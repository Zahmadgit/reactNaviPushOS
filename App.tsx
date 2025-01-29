import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,StyleSheet,Text,View,
} from 'react-native';
import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';
import ThirdPage from './src/screens/ThirdPage';
import TopPage from './src/screens/TopPage';
import ErrorBoundary from './src/components/ErrorBoundary';
import PlatformHeader from './src/components/PlatformHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

function App(): React.JSX.Element {
 
const RootStack = createNativeStackNavigator({
  screens:{
    TopPage: TopPage,
    SecondPage:SecondPage,
    FirstPage: FirstPage,
   
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
