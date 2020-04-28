import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TabHeader from '../TabHeader';
import NavigationContent from './NavigationContent';
import ListDividerExample from '../CountryPicker';
const Drawer = createDrawerNavigator();

function Navigation({navigation}) {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerStyle={{
            fontSize: 25,
          }}
          drawerContentOptions={{
            activeTintColor: '#1e73ea',
            inactiveTintColor: '#828282',
            labelStyle: {
              fontSize: 15,
            },
          }}>
          <Drawer.Screen
            name="All News"
            component={(props) => (
              <TabHeader {...props} searchName="All News" />
            )}
          />
          <Drawer.Screen
            name="The Times of India"
            component={ListDividerExample}
            drawerBackgroundColor="red"
          />
          <Drawer.Screen
            name="Hindustan Times"
            component={(props) => (
              <TabHeader {...props} searchName="Hindustantimes.com" />
            )}
          />
          <Drawer.Screen
            name="India Today"
            component={(props) => (
              <TabHeader {...props} searchName="Indiatoday.in" />
            )}
          />
          <Drawer.Screen
            name="Moneycontrol"
            component={(props) => (
              <TabHeader {...props} searchName="Moneycontrol.com" />
            )}
          />
          <Drawer.Screen
            name="The Hindu"
            component={(props) => (
              <TabHeader {...props} searchName="The Hindu" />
            )}
          />
          <Drawer.Screen
            name="Business Standard"
            component={(props) => (
              <TabHeader {...props} searchName="Business-standard.com" />
            )}
          />
          <Drawer.Screen
            name="Live mint"
            component={(props) => (
              <TabHeader {...props} searchName="Livemint.com" />
            )}
          />
          <Drawer.Screen
            name="News 18"
            component={(props) => (
              <TabHeader {...props} searchName="News18.com" />
            )}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
export default Navigation;
