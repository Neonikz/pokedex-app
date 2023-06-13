import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
