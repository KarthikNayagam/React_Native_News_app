import React, {useState, useEffect} from 'react';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import HeaderTitle from './Header';
import RenderNews from './RenderNews';
import axios from 'axios';
import MyWeb from './DetailedNews';
import {BackHandler} from 'react-native';
import {getSelectedArticles, getDynamicCategories} from './utils/utils';
import CountryPicker from './CountryPicker';
import {useSelector, useDispatch} from 'react-redux';
import {setCountry, setCountryPicker} from '../actions/Action';
const TabHeader = ({navigation, searchName, code, name}) => {
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewClicked, setViewClicked] = useState(false);
  const [detailedLink, setDetailedLink] = useState('');
  const dispatch = useDispatch();
  const showCountryPicker = useSelector((state) => state.showCountryPicker);
  const tabList = [
    'General',
    'Health',
    'Technology',
    'Business',
    'Entertainment',
    'Sports',
    'Science',
  ];
  const handleTabChange = ({ref}) => {
    setCategory(ref.props.heading);
    setLoading(true);
  };
  const handleViewClicked = (url) => {
    setViewClicked(true);
    setDetailedLink(url);
  };
  const handleArticles = (response) => {
    getDynamicCategories(response.data.articles);
    return getSelectedArticles(response.data.articles, searchName);
  };
  const handleSelectedCountry = (countryCode, countryName) => {
    const country = {
      code: countryCode,
      name: countryName,
    };
    dispatch(setCountry(country));
    dispatch(setCountryPicker(false));
  };
  useEffect(() => {
    console.log('inside render useEffect');
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${code}&category=${category}&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
      )
      .then((response) => {
        setContent(handleArticles(response));
        setLoading(false);
      });
    const backAction = () => {
      setViewClicked(false);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [category, code]);
  return (
    <>
      {!viewClicked ? (
        <Container>
          {showCountryPicker ? (
            <CountryPicker handleSelectedCountry={handleSelectedCountry} />
          ) : (
            <>
              <HeaderTitle navigation={navigation} name={name} />
              <Tabs
                renderTabBar={() => <ScrollableTab />}
                onChangeTab={(e) => handleTabChange(e)}
                tabDelay={0}>
                {tabList.map((obj) => (
                  <Tab heading={obj}>
                    <RenderNews
                      category={category}
                      content={content}
                      loading={loading}
                      handleViewClicked={handleViewClicked}
                      viewClicked={viewClicked}
                    />
                  </Tab>
                ))}
              </Tabs>
            </>
          )}
        </Container>
      ) : (
        <MyWeb detailedLink={detailedLink} />
      )}
    </>
  );
};

export default TabHeader;
