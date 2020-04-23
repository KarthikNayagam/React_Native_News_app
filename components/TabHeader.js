import React, {Component, useState, useEffect} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import HeaderTitle from './Header';
import RenderNews from './RenderNews';
import axios from 'axios';
const TabHeader = () => {
  const [category, setCategory] = useState('General');
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleTabChange = ({ref}) => {
    setCategory(ref.props.heading);
    setLoading(true);
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
  }, [category]);
  return (
    <Container>
      <HeaderTitle />
      <Tabs
        renderTabBar={() => <ScrollableTab />}
        onChangeTab={(e) => handleTabChange(e)}
        tabDelay={0}>
        <Tab heading="General">
          <RenderNews category={category} content={content} loading={loading} />
        </Tab>
        <Tab heading="Health">
          <RenderNews category={category} content={content} loading={loading} />
        </Tab>
        <Tab heading="Technology">
          <RenderNews category={category} content={content} loading={loading} />
        </Tab>
        <Tab heading="Business">
          <RenderNews category={category} content={content} loading={loading} />
        </Tab>
        <Tab heading="Entertainment">
          <RenderNews category={category} content={content} loading={loading} />
        </Tab>
        <Tab heading="Sports">
          <RenderNews category={category} content={content} loading={loading} />
        </Tab>
        <Tab heading="Science">
          <RenderNews category={category} content={content} loading={loading} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabHeader;
