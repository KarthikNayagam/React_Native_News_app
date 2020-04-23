import React, {Component, useState} from 'react';
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
const TabHeader = () => {
  const [category, setCategory] = useState('General');
  const handleTabChange = ({ref}) => {
    setCategory(ref.props.heading);
  };
  return (
    <Container>
      <HeaderTitle />
      <Tabs
        renderTabBar={() => <ScrollableTab />}
        onChangeTab={(e) => handleTabChange(e)}>
        <Tab heading="General">
          <RenderNews category={category} />
        </Tab>
        <Tab heading="Health">
          <RenderNews category={category} />
        </Tab>
        <Tab heading="Technology">
          <RenderNews category={category} />
        </Tab>
        <Tab heading="Business">
          <RenderNews category={category} />
        </Tab>
        <Tab heading="Entertainment">
          <RenderNews category={category} />
        </Tab>
        <Tab heading="Sports">
          <RenderNews category={category} />
        </Tab>
        <Tab heading="Science">
          <RenderNews category={category} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabHeader;
