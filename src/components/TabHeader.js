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
const TabHeader = ({navigation, searchName, code, name, content}) => {
  //const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewClicked, setViewClicked] = useState(false);
  const [detailedLink, setDetailedLink] = useState('');
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
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=${code}&category=${ref.props.heading}&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
      )
      .then((response) => {
        dispatch(setArticles(response.data.articles));
        setLoading(false);
      });
    setLoading(true);
  };
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
