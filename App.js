/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import TabHeader from './src/components/TabHeader';
import SplashScreen from 'react-native-splash-screen';
import MenuDrawer from './src/components/MenuDrawer';
import Navigation from './src/components/Navigation/Navigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers/rootReducer';
const App: () => React$Node = () => {
  const store = createStore(rootReducer);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export default App;
