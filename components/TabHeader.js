import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import HeaderTitle from './Header';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';
const TabHeader = () => {
  return (
    <Container>
      <HeaderTitle />
      <Tabs>
        <Tab heading="Tab1">{/* <Tab1 /> */}</Tab>
        <Tab heading="Tab2">{/* <Tab2 /> */}</Tab>
        <Tab heading="Tab3">{/* <Tab3 /> */}</Tab>
      </Tabs>
    </Container>
  );
};

export default TabHeader;
