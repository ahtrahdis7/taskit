import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
// import {
// //   SafeAreaView,
// //   StyleSheet,
//   // ScrollView,
//   View,
//   // Text,
// //   StatusBar,
// } from 'react-native';

import Taskit from './src/TaskitNavigator'

export default function App() {

      let [ fontsLoaded ] = useFonts({
        'ComicNeue-Bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
        'ComicNeue-Light': require('./assets/fonts/ComicNeue-Light.ttf'),
        'ComicNeue-Italic': require('./assets/fonts/ComicNeue-Italic.ttf'),
        'ComicNeue-Regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
      });

      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
            <NavigationContainer>
                <Taskit />
            </NavigationContainer>
        )
      }
      
};

