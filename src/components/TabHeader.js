import React, {useState, useEffect} from 'react';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import HeaderTitle from './Header';
import RenderNews from './RenderNews';
import axios from 'axios';
import MyWeb from './DetailedNews';
import {BackHandler} from 'react-native';
import CountryPicker from './CountryPicker';
import {useSelector, useDispatch} from 'react-redux';
import {setCountry, setCountryPicker, setArticles} from '../actions/Action';
import {useFetch} from './customHook/useFetch';
const TabHeader = ({navigation, searchName, code, name, content}) => {
  //const [content, setContent] = useState([]);
  const [viewClicked, setViewClicked] = useState(false);
  const [detailedLink, setDetailedLink] = useState('');
  const [tabHeading, setTabHeading] = useState('General');
  const dispatch = useDispatch();
  const showCountryPicker = useSelector((state) => state.showCountryPicker);
  const articleContent = useSelector((state) => state.articleContent);
  console.log('articleContent', articleContent);
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
    setTabHeading(ref.props.heading);
  };

  const {loading, response} = useFetch(code, tabHeading);
  if (response) {
    dispatch(setArticles(response));
  }

  console.log('response tab change', loading);

  const handleViewClicked = (url) => {
    setViewClicked(true);
    setDetailedLink(url);
  };
  const handleSelectedCountry = (countryCode, countryName) => {
    const country = {
      code: countryCode,
      name: countryName,
    };
    dispatch(setCountry(country));
    dispatch(setCountryPicker(false));
  };
  // useEffect(() => {
  //   const backAction = () => {
  //     setViewClicked(false);
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

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
                      content={articleContent}
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
