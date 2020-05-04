import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TabHeader from '../TabHeader';
import NavigationContent from './NavigationContent';
import NewsSwiper from '../NewsSwiper';
import NewsCard from '../NewsCard';
import {getSelectedArticles, getDynamicCategories} from '../utils/utils';

const Drawer = createDrawerNavigator();
import axios from 'axios';

function Navigation({navigation}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/sources?country=gb&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18',
      )
      .then((response) => {
        setCategories(response.data.sources);
      });
  }, []);
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
            name="Briefs"
            component={(props) => (
              <NewsSwiper {...props} searchName="The Times of India" />
            )}
          />
          {categories.length > 0 &&
            categories.map((obj) => (
              <Drawer.Screen
                name={obj.name}
                component={(props) => (
                  <NewsCard {...props} searchName={obj} url={obj.url} />
                )}
                drawerBackgroundColor="red"
              />
            ))}
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
export default Navigation;
