import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TabHeader from '../TabHeader';
import NavigationContent from './NavigationContent';
import NewsSwiper from '../NewsSwiper';
import NewsCard from '../NewsCard';
import {getSelectedArticles, getDynamicCategories} from '../utils/utils';
import {useSelector} from 'react-redux';
const Drawer = createDrawerNavigator();
import axios from 'axios';

function Navigation({navigation}) {
  const [categories, setCategories] = useState([]);
  const country = useSelector((state) => state.country);
  console.log('country inside navigation', country);
  const {code, name} = country;

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/sources?country=${code}&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
      )
      .then((response) => {
        setCategories(response.data.sources);
      });
  }, [code]);
  return (
    <>
      {categories.length > 0 ? (
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
                <TabHeader
                  {...props}
                  searchName="All News"
                  code={code}
                  name={name}
                />
              )}
            />
            <Drawer.Screen
              name="Briefs"
              component={(props) => (
                <NewsSwiper
                  {...props}
                  searchName="The Times of India"
                  code={code}
                  name={name}
                />
              )}
            />
            {categories.map((obj) => (
              <Drawer.Screen
                name={obj.name}
                component={(props) => (
                  <NewsCard
                    {...props}
                    searchName={obj}
                    url={obj.url}
                    code={code}
                    name={name}
                  />
                )}
                drawerBackgroundColor="red"
              />
            ))}
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </>
  );
}
export default Navigation;
