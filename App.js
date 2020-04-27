/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import TabHeader from './components/TabHeader';
import SplashScreen from 'react-native-splash-screen';

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <TabHeader />
    </>
  );
};

export default App;
