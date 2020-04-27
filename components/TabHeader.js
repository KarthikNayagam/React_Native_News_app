import React, {useState, useEffect} from 'react';
import {Container, Tab, Tabs, ScrollableTab} from 'native-base';
import HeaderTitle from './Header';
import RenderNews from './RenderNews';
import axios from 'axios';
import MyWeb from './DetailedNews';
import {BackHandler} from 'react-native';
const TabHeader = () => {
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewClicked, setViewClicked] = useState(false);
  const [detailedLink, setDetailedLink] = useState('');
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
    console.log('url', url);
    setViewClicked(true);
    setDetailedLink(url);
  };

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2d44fa08b51e41a0b4e0c314e0c76c18`,
      )
      .then((response) => {
        setContent(response.data.articles);
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
  }, [category]);
  return (
    <>
      {!viewClicked ? (
        <Container>
          <HeaderTitle />
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
        </Container>
      ) : (
        <MyWeb detailedLink={detailedLink} />
      )}
    </>
  );
};

export default TabHeader;
