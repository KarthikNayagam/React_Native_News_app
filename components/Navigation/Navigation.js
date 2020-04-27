import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TabHeader from '../TabHeader';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Text onPress={() => navigation.openDrawer()}>test1</Text>
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function Navigation({navigation}) {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="All News"
            component={(props) => (
              <TabHeader {...props} searchName="All News" />
            )}
          />
          <Drawer.Screen
            name="The Times of India"
            component={(props) => (
              <TabHeader {...props} searchName="The Times of India" />
            )}
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
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
export default Navigation;
