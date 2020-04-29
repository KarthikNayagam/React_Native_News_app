import React, {useState, useEffect} from 'react';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import HeaderTitle from './Header';
import RenderNews from './RenderNews';
import axios from 'axios';
import MyWeb from './DetailedNews';
import {BackHandler} from 'react-native';
import {getSelectedArticles} from './utils/utils';
import CountryPicker from './CountryPicker';
const TabHeader = ({navigation, searchName}) => {
  console.log('navigation searchName', searchName);
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewClicked, setViewClicked] = useState(false);
  const [detailedLink, setDetailedLink] = useState('');
  const [displayCountryPicker, setCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'in',
    name: 'India',
  });
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
    return getSelectedArticles(response.data.articles, searchName);
  };
  const handleCountryPicker = () => {
    setCountryPicker(true);
  };
  const handleSelectedCountry = (countryCode, countryName) => {
    setSelectedCountry({
      ...selectedCountry,
      code: countryCode,
      name: countryName,
    });
    setCountryPicker(false);
  };
  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${selectedCountry.code}&category=${category}&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
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
  }, [category, selectedCountry]);
  return (
    <>
      {!viewClicked ? (
        <Container>
          {displayCountryPicker ? (
            <CountryPicker handleSelectedCountry={handleSelectedCountry} />
          ) : (
            <>
              <HeaderTitle
                navigation={navigation}
                handleCountryPicker={handleCountryPicker}
                selectedCountry={selectedCountry}
              />
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
