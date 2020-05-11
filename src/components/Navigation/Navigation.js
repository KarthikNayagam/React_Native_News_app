import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import TabHeader from '../TabHeader';
import NewsSwiper from '../NewsSwiper';
import NewsCard from '../NewsCard';
import {useSelector, useDispatch} from 'react-redux';
import {sourceDomain, apiKey, sourceHeadLines} from '../../constants/endpoints';
import {setArticles} from '../../actions/Action';
const Drawer = createDrawerNavigator();
import axios from 'axios';
import {Spinner} from 'native-base';
import {useFetchMultiple} from '../customHook/useFetch';
function Navigation({navigation}) {
  const country = useSelector((state) => state.country);
  console.log('country inside navigation', country);
  const {code, name} = country;
  const dispatch = useDispatch();
  const getSources = axios.get(
    `${sourceDomain}?country=${code}&apiKey=${apiKey}`,
  );
  const getArticles = axios.get(
    `${sourceHeadLines}?country=${code}&category=General&apiKey=${apiKey}`,
  );
  const res = useFetchMultiple(getSources, getArticles, code);

  const {articles, loading, categories} = res;
  dispatch(setArticles(articles.articles));
  return (
    <>
      {loading ? (
        <Spinner color="blue" />
      ) : (
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
                  content={articles.articles}
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
            {categories.sources &&
              categories.sources.map((obj) => {
                console.log('obj1', obj);
                return (
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
                );
              })}
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
export default Navigation;
